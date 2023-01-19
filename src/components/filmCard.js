import React from "react";
import "./filmCard.css";
import anewhope from "../../public/imgs/ANewHope.jpg";

const FilmCard = ({ film }) => {
  return (
    <div className="filmCard">
      <img className="film-img" src={anewhope} alt="4" />
    </div>
  );
};

export default FilmCard;
