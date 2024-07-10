import { FormEvent, useState } from "react"
import classes from "./index.module.css"

interface EditProps {
  id: number,
  handleSubmit: (id: number, data: {name: string, model: string, price: string}) => void, 
}

const EditForm = ({id, handleSubmit}: EditProps) => {

  const [fields, setField] = useState({
    name: "",
    model: "",
    price: "",
  })
 
  const localSubmitHandler = (event: FormEvent) => {
    event.preventDefault()
    handleSubmit(id, fields)
  }

  return (
    <form onSubmit={localSubmitHandler}>
      <div className={classes.input}>
        <p>Марка:</p>
        <input 
          type="text" 
          value={fields.name} 
          onChange={(e) => setField({...fields, name: e.target.value})}
          />
      </div>
      <div className={classes.input}>
        <p>Модель:</p>
        <input 
          type="text" 
          value={fields.model} 
          onChange={(e) => setField({...fields, model: e.target.value})}
          />
      </div>
      <div className={classes.input}>
        <p>Стоимость:</p>
        <input
          type="text" 
          value={fields.price} 
          onChange={(e) => setField({...fields, price: e.target.value})}
          />
      </div>
      <button className={classes.submit} type="submit">Подтвердить</button>
    </form>
  )
}

export default EditForm