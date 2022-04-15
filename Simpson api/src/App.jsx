import "./App.css";
import { useState } from "react";
import axios from "axios";
import SimpsonCard from "./Components/SimpsonCard";

export default function App() {
  
  const sampleSimpson = {
    image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    name : "Homer Simpson",
    quote : "I can't even say the word 'titmouse' without gigggling like a schoolgirl."
  }

  const [simpson, setSimpson] = useState(sampleSimpson);

  const getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => {
        setSimpson(response.data[0]);
        console.log(response.data);
      });
  };

  return (
    <div className="block">
      <button type="button" onClick={getQuote}>
        Get new Simpson's character quote
      </button>
      <SimpsonCard
        name={simpson.character}
        quote={simpson.quote}
        image={simpson.image}
      />
    </div>
  );
}
