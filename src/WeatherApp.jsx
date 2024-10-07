import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from "react";



export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
      city: "Enter a city name:",
      feelsLike: 0.00,
      humidity: 0.00,
      temp: 0.00,
      tempMax: 0.00,
      tempMin: 0.00,
      weather: "NULL",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };


    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>

            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    );
}