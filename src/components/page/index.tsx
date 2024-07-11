import { useEffect, useState } from "react";
import Card from "../Card";
import classes from "./index.module.css";
import fetchCars from "../../api/fetchCars";
import { CarType } from "../../types";
import sortingMethod from "../../util/sort";
import down from "../../images/down.png";
import up from "../../images/up.png";
import neutral from "../../images/neutral.png";

const Page = () => {

  const [sortingType, setSortingType] = useState("default");
  const [carList, setCarList] = useState<CarType[]>([]);
  const [isEditable, setIsEditable] = useState(0);
  const [showMap, setShowMap] = useState(0);
  
  useEffect(() => {
    setTimeout(() => {
      fetchCars()
      .then((res) => {setCarList(res)});
    }, 1000)
  }, []);

  
  //При изменении метода сортировки генерируется новый список
  //Функция сортировки расположена "../../util/sort.ts"
  useEffect(() => {
    setCarList(sortingMethod(carList, sortingType));
  }, [sortingType]);

  //Сортировка по году
  const handleYearButton = () => {
    sortingType === "yearAsc" ? 
      setSortingType("yearDesc") 
      : setSortingType("yearAsc");
  };
  //Сортировка по цене
  const handlePriceButton= () => {
    sortingType === "priceAsc" ? 
      setSortingType("priceDesc") 
      : setSortingType("priceAsc");
  };
  //Сортировка по умолчанию(id)
  const handleDefaultButton = () => {
    setSortingType("default");
  };
  //Удаление
  const handleDelete = (id: number) => {
    setCarList(carList.filter((item) => item.id !== id));
  };
  //Открытие формы редактирования
  const handleEdit = (id: number) => {
    isEditable !== id ? setIsEditable(id) : setIsEditable(0);
  };
  //Подтверждение редактирования
  const handleSubmit = (id: number, data: {name: string, model: string, price: string}) => {
    setCarList(carList.map(car =>
      car.id === id ? 
        { ...car, name: data.name, model: data.model, price: Number(data.price) } 
        : car
    ));
    setIsEditable(0);
  };

  const handleShowMap = (id: number) => {
    showMap !== id ? setShowMap(id) : setShowMap(0);
  };

  return (
    <div className={classes.page}>
      <div className={classes.sorting}>
        <p>Сортировка:</p>
        <div className={classes.year} onClick={handleYearButton}>
          Год выпуска
          <img 
            className={classes.arrow} 
            src={sortingType === "yearAsc" ? up : sortingType === "yearDesc" ? down : neutral} 
            alt="arrow"
            >
          </img>
        </div>
        <div className={classes.cost} onClick={handlePriceButton}>
          Стоимость
          <img 
            className={classes.arrow} 
            src={sortingType === "priceAsc" ? up : sortingType === "priceDesc" ? down : neutral} 
            alt="arrow"
            >
          </img>
        </div>
        <div className={classes.default} onClick={handleDefaultButton}>По умолчанию</div>
      </div>
      <div className={classes.cardList}>
        {carList.length ? carList.map((car: CarType) => (
          <Card
            key={car.id} 
            id={car.id} 
            name={car.name} 
            model={car.model}
            year={car.year}
            color={car.color}
            price={car.price}
            latitude={car.latitude}
            longitude={car.longitude}
            handleDelete={handleDelete}
            isEditable={isEditable}
            handleEdit={handleEdit}
            handleSubmit={handleSubmit}
            showMap={showMap}
            handleShowMap={handleShowMap}
            />
        )) : <>Загрузка...</>}
      </div>
    </div>
  )
}

export default Page;