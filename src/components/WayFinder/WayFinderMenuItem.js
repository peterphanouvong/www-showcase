import React from "react";
import { NavLink } from "react-router-dom";

const WayFinderMenuItem = ({ item }) => {
  // useEffect(() => {});

  return item.path[0] === "/" ? (
    <NavLink to={item.path}>
      <div className="menu-item">
        <h2 className="menu-item-title">{item.title}</h2>
        <img src={item.arrow} alt="" />
      </div>
    </NavLink>
  ) : (
    <a href={item.path} target="_blank" rel="noreferrer">
      <div className="menu-item">
        <h2 className="menu-item-title">{item.title}</h2>
        <img src={item.arrow} alt="" />
      </div>
    </a>
  );
};

export default WayFinderMenuItem;
