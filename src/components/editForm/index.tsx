import classes from "./index.module.css"

const EditForm = () => {
  return (
    <form>
      <div className={classes.input}>
        <p>Марка:</p>
        <input type="text"/>
      </div>
      <div className={classes.input}>
        <p>Модель:</p>
        <input type="text"/>
      </div>
      <div className={classes.input}>
        <p>Стоимость:</p>
        <input type="text"/>
      </div>
      <button className={classes.submit} type="submit">Подтвердить</button>
    </form>
  )
}

export default EditForm