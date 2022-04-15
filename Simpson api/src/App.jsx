import "./App.css";
import { useState } from "react";
import axios from "axios";
import SimpsonCard from "./Components/SimpsonCard";

export default function App() {
  
  const [simpson, setSimpson] = useState({});

  const getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => {
        setSimpson(response.data[0]);
        console.log(response.data)
      });
    };

  return (
    <>
      <SimpsonCard name={simpson.character} quote={simpson.quote} image={simpson.image}/>
      <button type="button" onClick={getQuote}>
        Get new Simpson's character quote
      </button>
    </>
  );
}