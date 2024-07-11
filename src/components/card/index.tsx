import classes from "./index.module.css";
import carImg from "../../images/car.png";
import cross from "../../images/cross.png";
import edit from "../../images/edit.png";
import map from "../../images/map.png";
import { CarType } from "../../types";
import EditForm from "../EditForm";
import MyMap from "../MyMap";

interface CardProps extends CarType {
  handleDelete: (id: number) => void,
  isEditable: number,
  handleEdit: (id: number) => void,
  handleSubmit: (id: number, data: {name: string, model: string, price: string}) => void,
  showMap: number,
  handleShowMap: (id: number) => void,
}

const Card = (
  { id, name, model, year, color, price, latitude, longitude, 
    handleDelete, isEditable, handleEdit, handleSubmit, showMap, handleShowMap }: CardProps
  ) => {
  
  return (
    <div className={classes.card}>
      <img className={classes.autoImg} src={carImg} alt="car"></img>
      <div className={classes.title}>
        <h2>{name} {model}</h2>
        <p>{year}</p>
      </div>
      <div className={classes.color}>
        <p>Цвет: {color}</p>
        <div className={classes.palette} style={{background: `${color}`}}></div>
      </div>
      <div className={classes.price}>
        <p>Стоимость:</p>
        <p className={classes.cost}>{price}$</p>
      </div>
      <div className={classes.menu}>
        <div className={classes.menuButton} onClick={() => handleShowMap(id)}>
          <img src={map} alt="map"></img>
        </div>
        <div className={classes.menuButton} onClick={() => handleEdit(id)}>
          <img src={edit} alt="edit"></img>
        </div>
        <div className={classes.menuButton} onClick={() => handleDelete(id)}>
          <img src={cross} alt="delete"></img>
        </div>
      </div>
      {isEditable === id && <EditForm id={id} handleSubmit={handleSubmit}/>}
      {showMap === id && <MyMap longitude={longitude} latitude={latitude}/>}
    </div>
  )
}

export default Card;