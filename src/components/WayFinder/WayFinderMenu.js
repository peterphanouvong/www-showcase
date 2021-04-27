import React from "react";
import WayFinderMenuItem from "./WayFinderMenuItem";

const WayFinderMenu = ({ items }) => {
  return (
    <div>
      {items.map((item, i) => {
        return <WayFinderMenuItem item={item} key={i} />;
      })}
    </div>
  );
};

export default WayFinderMenu;
