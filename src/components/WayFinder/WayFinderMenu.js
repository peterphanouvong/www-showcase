import React from "react";
import WayFinderMenuItem from "./WayFinderMenuItem";

const WayFinderMenu = ({ items }) => {
  return (
    <>
      {items.map((item, i) => {
        return <WayFinderMenuItem item={item} index={i} key={i} />;
      })}
    </>
  );
};

export default WayFinderMenu;
