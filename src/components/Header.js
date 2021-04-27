import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const Header = ({ LeftLinks, RightLink }, props) => {
  const [path, setPath] = useState("/");

  const history = useHistory();
  useEffect(() => {
    history.listen((location) => {
      setPath(location.pathname);
    });
  }, [history]);

  return (
    <>
      <div className="header">
        <div className="header-inner">
          <div className="left-link">
            <h2 className="gallery-index-links">
              <NavLink to="/">Gallery</NavLink>
              <span className="op-3"> / </span>
              <span className="op-3 lt-link">Index</span>
            </h2>
            <h2 className="gallery-index-links">
              <NavLink to="/">Gallery</NavLink>
              <span className="op-3"> / </span>
              <span className="op-3 lt-link">Index</span>
            </h2>
          </div>
          <h2 className="right-link">
            {path === "/" ? (
              <NavLink to="/wayfinder">Menu</NavLink>
            ) : (
              <NavLink to="/">Close</NavLink>
            )}
            {/* <NavLink to="/wayfinder">Menu</NavLink> */}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Header;
