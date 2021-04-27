import "./App.scss";
// Animations
import { CSSTransition } from "react-transition-group";
import {
  exitGallery,
  enterGallery,
  enterWayFinder,
  exitWayFinder,
} from "./animations/pageAnimations";
// Components
import { Route } from "react-router-dom";

// Pages
import Gallery from "./pages/Gallery";
import WayFinder from "./pages/WayFinder";
import React from "react";
import Header from "./components/Header";

const routes = [
  {
    path: "/",
    name: "Gallery",
    Component: Gallery,
    onExit: exitGallery,
    onEnter: enterGallery,
  },
  {
    path: "/wayfinder",
    name: "WayFinder",
    Component: WayFinder,
    onEnter: enterWayFinder,
    onExit: exitWayFinder,
  },
];

function App() {
  return (
    <>
      <Header />
      <div className="container">
        {routes.map(({ path, Component, onExit, onEnter }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={500}
                classNames="page"
                onExit={onExit}
                onEntering={onEnter}
                appear
                unmountOnExit
              >
                <Component />
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </>
  );
}

export default App;
