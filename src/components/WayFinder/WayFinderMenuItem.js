import React from "react";
import { NavLink } from "react-router-dom";

const WayFinderMenuItem = ({ item, index }) => {
  // useEffect(() => {});

  return item.path[0] === "/" ? (
    <NavLink to={item.path}>
      <div className="menu-item">
        <div className="overflow-container">
          <h2 className="menu-item-title">{item.title}</h2>
        </div>
        <div className="overflow-container">
          <img src={item.arrow} alt="" className={`arrow-${index}`} />
        </div>
      </div>
    </NavLink>
  ) : (
    <a href={item.path} target="_blank" rel="noreferrer">
      <div className="menu-item">
        <div className="overflow-container">
          <h2 className="menu-item-title">{item.title}</h2>
        </div>
        <div className="overflow-container">
          <img src={item.arrow} alt="" className={`arrow-${index}`} />
        </div>
      </div>
    </a>
  );
};

export default WayFinderMenuItem;
