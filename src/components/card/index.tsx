import classes from "./index.module.css"
import carImg from "../../images/car.png"
import cross from "../../images/cross.png"
import edit from "../../images/edit.png"
import map from "../../images/map.png"
import { CarType } from "../../types"
import EditForm from "../editForm"
import { useState } from "react"

interface CardProps extends CarType{
  handleDelete: (id: number) => void
}

const Card = ({id, name, model, year, color, price, latitude, longitude, handleDelete}: CardProps) => {
  
  const [isEditable, setIsEditable] = useState(2)

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
        <div className={classes.menuButton}>
          <img src={map} alt="map"></img>
        </div>
        <div className={classes.menuButton}>
          <img src={edit} alt="edit"></img>
        </div>
        <div className={classes.menuButton} onClick={() => handleDelete(id)}>
          <img src={cross} alt="delete"></img>
        </div>
      </div>
      {isEditable === id && <EditForm/>}
      
    </div>
  )
}

export default Card;