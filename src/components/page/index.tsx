import Card from "../card";
import classes from "./index.module.css"

const Page = () => {
  return (
    <div className={classes.page}>
      <div className={classes.sorting}>
        <p>Сортировка:</p>
        <div>Год выпуска</div>
        <div>Стоимость</div>
      </div>
      <div className={classes.cardList}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default Page;