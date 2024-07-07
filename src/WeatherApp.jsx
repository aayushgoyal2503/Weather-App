import SearchBox from "./Searchbox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    
    const[weatherInfo, setWeatherInfo]=useState({
        city:"Mumbai",
        feelsLike:42.05,
        humidity:63,
        temp:35.05,
        tempMax:35.05,
        tempMin:35.05,
        weather:"haze",

    });
    
    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    }

    return(
        <div>
            <h2>Weather!</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}