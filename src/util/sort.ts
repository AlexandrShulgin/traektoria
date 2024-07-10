import { CarType } from "../types";

const sortingMethod = (carList: CarType[], method: string) => {
  const sortedList = [...carList];
  switch (method) {
    case "yearAsc":
      sortedList.sort((a, b) => a.year - b.year);
      break;

    case "yearDesc":
      sortedList.sort((a, b) => b.year - a.year);
      break;
    
    case "priceAsc":
      sortedList.sort((a, b) => a.price - b.price);
      break;

    case "priceDesc":
      sortedList.sort((a, b) => b.price - a.price);
      break;

    case "default": 
      sortedList.sort((a, b) => a.id - b.id)
      break;
      
    default:
      break;
  }
  return sortedList;
}

export default sortingMethod;