import { useEffect, useState } from "react";
import fetchMap from "../../api/fetchMap";
import classes from "./index.module.css";

interface MapProps {
  longitude: number,
  latitude: number,
}

const MyMap = ({longitude, latitude}: MapProps) => {

  const [map, setMap] = useState<string | undefined>("");
  
  useEffect(() => {
    fetchMap(`${longitude},${latitude}`).then((res) => setMap(res));
  },[]);

  return (
    <div className={classes.Map}>
      <img src={map} alt="map"/>
    </div>
  )
}

export default MyMap;