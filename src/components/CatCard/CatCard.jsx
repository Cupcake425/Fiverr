import React from "react";
import "./CatCard.scss";
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
const CatCard = ({ item }) => {
  return (
    <Link to="/gigs/">
      <div className="catcard">
        <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
};

export default CatCard;
