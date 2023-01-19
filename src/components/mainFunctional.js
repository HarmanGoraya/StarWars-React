import React, { useState, useEffect } from "react";
import starwars from "../APIs/starwars";
import FilmCard from "./filmCard.js";
import "./mainFunctional.css";

function MainFunctional() {
  const [data, setData] = useState([]);

  useEffect(() => {
    starwars.getFilms().then((response) => {
      console.log("response", response);
      setData(response);
    });
  }, []);

  return (
    <div className="App">
      {data.map((item, index) => (
        <FilmCard key={index} film={item}></FilmCard>
      ))}
    </div>
  );
}

export default MainFunctional;
