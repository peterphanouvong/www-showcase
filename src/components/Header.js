import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

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
          <div className="links">
            <div className="left-link">
              <h2 className="gallery-index-links">
                <NavLink to="/">Gallery</NavLink>
                <span className="op-3"> / </span>
                <span className="op-3 lt-link">Index</span>
              </h2>
              <h2 className="all-projects-link">
                <NavLink to="/">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <MdArrowBack /> All Projects
                  </div>
                </NavLink>
              </h2>
            </div>
            <h2 className="right-link">
              {path !== "/wayfinder" ? (
                <NavLink to="/wayfinder">Menu</NavLink>
              ) : (
                <a onClick={() => history.goBack()}>Close</a>
              )}
              {/* <NavLink to="/wayfinder">Menu</NavLink> */}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
