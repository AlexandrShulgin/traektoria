import classes from "./index.module.css"
import carImg from "../../images/car.png"

const Card = () => {
  return (
    <div className={classes.card}>
      <img src={carImg} alt="car"></img>
      <div className={classes.title}>
        <h2>Toyota Camry</h2>
        <p>2005г</p>
      </div>
      <div className={classes.color}>
        <p>Цвет:</p>
        <div className={classes.palette} style={{background: "white"}}></div>
      </div>
      <div className={classes.price}>
        <p>Стоимость:</p>
        <p className={classes.cost}>20000$</p>
      </div>
    </div>
  )
}

export default Card;