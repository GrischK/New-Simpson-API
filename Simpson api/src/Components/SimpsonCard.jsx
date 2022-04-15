import React from "react";

export default function SimpsonCard({name, image, quote}) {
  return ( 
    <>
      <h1>A Simpson's quote :</h1>
      <h2>{name}</h2>
      <h3>{quote}</h3>
      <img scr={image} alt={name}/>
    </>
  );
}
