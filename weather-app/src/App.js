import logo from './logo.svg';
import './App.css';
import Form from './Form.js'
import DataShow from './DataShow.js'
import {useEffect, useState} from "react";

function App() {
  const [city, setCity] = useState({city: "paris"})

  return (
    <> 
    <Form setCity={setCity} city={city}/>
    <DataShow city={city}/>
    </>
  );
}

export default App;
