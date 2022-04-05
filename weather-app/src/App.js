import logo from './logo.svg';
import './App.css';
import Form from './Form.js'
import DataShow from './DataShow.js'
import {useEffect, useState} from "react";

function App() {
  const [city, setCity] = useState({city: "paris"})
  const [weather, setWeather] = useState({})
  
  return (
    <> 
    <Form setCity={setCity} city={city}/>
    <DataShow city={city} setWeather={setWeather} weather={weather}/>
    </>
  );
}

export default App;
