import { useEffect, useState } from "react";
import Card from "../card";
import classes from "./index.module.css"
import fetchCars from "../../api/fetchCars";
import { CarType } from "../../types";
import sortingMethod from "../../util/sort";
import down from "../../images/down.png";
import up from "../../images/up.png"
import neutral from "../../images/neutral.png"

const Page = () => {

  const [sortingType, setSortingType] = useState("default");
  const [carList, setCarList] = useState<CarType[]>();
  
  useEffect(() => {
    setTimeout(() => {
      fetchCars()
      .then((res) => {setCarList(res)})
    }, 1000)
  }, [])

  useEffect(() => {
    if (carList) {
      setCarList(sortingMethod(carList, sortingType))
    }
  }, [sortingType])

  const handleYearButton = () => {
    sortingType === "yearAsc" ? setSortingType("yearDesc") : setSortingType("yearAsc")
  }

  const handlePriceButton= () => {
    sortingType === "priceAsc" ? setSortingType("priceDesc") : setSortingType("priceAsc")
  }

  const handleDefaultButton = () => {
    setSortingType("default")
  }

  const handleDelete = (id: number) => {
    if (carList) {
      setCarList(carList.filter((item) => item.id !== id))
    }
  }

  const handleEdit = (id: number) => {
    
  }

  return (
    <div className={classes.page}>
      <div className={classes.sorting}>
        <p>Сортировка:</p>
        <div className={classes.year} onClick={handleYearButton}>
          Год выпуска
          <img className={classes.arrow} src={sortingType === "yearAsc" ? up : sortingType === "yearDesc" ? down : neutral} alt="arrow"></img>
        </div>
        <div className={classes.cost} onClick={handlePriceButton}>
          Стоимость
          <img className={classes.arrow} src={sortingType === "priceAsc" ? up : sortingType === "priceDesc" ? down : neutral} alt="arrow"></img>
        </div>
        <div className={classes.default} onClick={handleDefaultButton}>По умолчанию</div>
      </div>
      <div className={classes.cardList}>
        {carList?.length ? carList.map((car: CarType) => (
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
            />
        )): <>Загрузка...</>}
      </div>
    </div>
  )
}

export default Page;