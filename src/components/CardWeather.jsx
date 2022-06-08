import React from 'react'
import { useEffect, useState } from "react"

const CardWeather = ({weather}) => {
  const [isBoolean, setIsBoolean] = useState(true)
  const toggleButton = () => setIsBoolean(!isBoolean) 
  return (
    <div className='Card'>
      <h2>{weather?.name}</h2>
      <img 
        src={weather && `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} 
        alt="icon weather condition" 
      />
      <h2> {weather?.weather[0].description}</h2>
      <h3> <b>Cloud: </b> {weather?.clouds.all} <b>%</b> </h3>
      <h3> <b>Wind: </b> {weather?.wind.speed} <b>km/h</b> </h3>
      {
        isBoolean ?
        <h3><b>Celsius degrees: </b>{Math.round(weather?.main.temp - 275.1)}<b>°C</b></h3>
        :
        <h3><b>Fahrenheit degrees: </b>{Math.round(weather?.main.temp - 275.1) * 9/5 +32}<b>°F</b></h3>
      }
      
      <button onClick={toggleButton}> Change Degree</button>
    </div>
  )
}

export default CardWeather