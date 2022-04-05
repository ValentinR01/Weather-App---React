import { Component, useEffect } from "react";

export default function DataShow(props) {
    const city = props.city;
    const ApiKey = '04fec3cd1058130853ce331b1deda216'
    const setWeather = props.setWeather
    var weather = props.weather
    
    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city.city + "&appid=" + ApiKey)
        .then(response => response.json())
        .then(data => {
            const weatherData = {
                sky: data.weather[0].description,
                temp: Math.round((data.main.temp - 273)) //Kelvin to °
            }
            setWeather(weatherData)
        })

    })
   
    
    return (
        <div>
            <h2>Weather in {city.city}</h2>
            <h3>Sky : {weather.sky}</h3>
            <h3>Temperature : {weather.temp}°</h3>
        </div>
    )

    
        

    

   
    
}