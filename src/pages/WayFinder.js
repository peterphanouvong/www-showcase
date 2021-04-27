import React from "react";

// Components
import Footer from "../components/Footer";

// Images
import SouthEast from "../images/southeast.svg";
import East from "../images/east.svg";
import NorthEast from "../images/northeast.svg";
import WayFinderMenu from "../components/WayFinder/WayFinderMenu";

// Animations

const items = [
  { title: "Gallery", arrow: NorthEast, path: "/" },
  { title: "Journal", arrow: East, path: "/" },
  {
    title: "Portfolio",
    arrow: SouthEast,
    path: "https://peterphanouvong-folio.netlify.app/",
  },
];

const WayFinder = (props) => {
  return (
    <>
      <div className="wayfinder">
        <WayFinderMenu items={items} />
      </div>
      <Footer />
    </>
  );
};

export default WayFinder;
