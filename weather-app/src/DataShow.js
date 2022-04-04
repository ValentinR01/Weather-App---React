import { Component, useEffect } from "react";

export default function DataShow(props) {
    const city = props.city;
    const ApiKey = '04fec3cd1058130853ce331b1deda216'
    
    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city.city + "&appid=" + ApiKey)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })

    })
   
    
    return (
        <div>
            
        </div>
    )

    
        

    

   
    
}