import React, { useEffect, useRef } from "react";

// Components
import FlickityW from "react-flickity-component";
import { useLocation } from "react-router-dom";

// Animations
import gsap from "gsap";
import { colorIn, greyOut } from "../animations/galleryAnimations";

// Images
import g1 from "../images/gallery-1.png";
import g2 from "../images/gallery-2.png";
import g3 from "../images/gallery-7.png";
import SouthEast from "../images/southeast.svg";

const projects = [
  {
    name: "Gallery Project 1",
    image: g1,
    technologies: "React",
    year: "2021",
    id: 0,
  },
  {
    name: "Gallery Project 2",
    image: g2,
    technologies: "React",
    year: "2021",
    id: 1,
  },
  {
    name: "Gallery Project 3",
    image: g3,
    technologies: "React",
    year: "2021",
    id: 2,
  },
];

const ProjectItem = ({ project }) => {
  const greyOutOthers = (e) => {
    const list = [...document.getElementsByClassName("project-item")];
    list.splice(e.currentTarget.id, 1);
    greyOut(list);
  };

  const colorBack = (e) => {
    const list = [...document.getElementsByClassName("project-item")];
    list.splice(e.currentTarget.id, 1);
    colorIn(list);
  };

  return (
    <div className="project-item">
      <div>
        <div
          onMouseEnter={greyOutOthers}
          onMouseLeave={colorBack}
          id={project.id}
          className="project-image-wrapper"
        >
          <img className="project-image" src={project.image} alt="" />
        </div>
        <div className="project-info">
          <div className="name">
            <h3>{project.name}</h3>
          </div>
          <div className="technologies">
            <h4>{project.technologies}</h4>
          </div>
        </div>
      </div>
      <div className="year">
        <h4 className="rotate">
          <span className="little">PRJ</span> {project.year}
        </h4>
      </div>
    </div>
  );
};

const Projects = () => {
  let scale = 1;
  let flkty = useRef(null);

  useEffect(() => {
    if (flkty) {
      flkty.current.velocity = 2;
      flkty.current.isFreeScrolling = true;
      flkty.current.startAnimation();
    }
  });

  const scroll = (event) => {
    scale = event.deltaY * -0.15;
    if (flkty) {
      flkty.current.velocity = scale;
      flkty.current.isFreeScrolling = true;
      flkty.current.startAnimation();
    }
  };

  const flickityOptions = {
    freeScroll: true,
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    percentPosition: false,
    freeScrollFriction: 0.07,
    lazyLoad: 3,
  };
  return (
    <div onWheel={scroll}>
      <FlickityW
        flickityRef={(p) => (flkty.current = p)}
        className={"carousel"}
        elementType={"div"}
        options={flickityOptions}
        reloadOnUpdate={true}
        imagesLoaded={true}
      >
        {projects.map((project, i) => {
          return <ProjectItem key={i} project={project} />;
        })}
      </FlickityW>
    </div>
  );
};

const Gallery = () => {
  const showLocation = () => {
    const tl = gsap.timeline();
    tl.to([".location h4", ".location p"], {
      transform: "translateY(0)",
      duration: 0.5,
      stagger: {
        amount: 0.1,
      },
      ease: "power2.out",
    });
  };

  const hideLocation = () => {
    const tl = gsap.timeline();
    tl.to([".location h4", ".location p"], {
      transform: "translateY(20px)",
      duration: 0.5,
    });
  };

  return (
    <div className="gallery">
      <div className="south-east-arrow-wrapper">
        <img
          className="south-east-arrow"
          onMouseEnter={showLocation}
          onMouseLeave={hideLocation}
          src={SouthEast}
          alt=""
        />
        <div className="location">
          <div className="hide-container">
            <h4>Sydney</h4>
          </div>
          <div className="hide-container">
            <p>33.8688° S, 151.2093° E</p>
          </div>
        </div>
      </div>

      <Projects />
      <div className="footer">
        <span>Peter's</span>
        <br />
        <span>Awwwards</span>
        <br />
        <span>Clones</span>
      </div>
    </div>
  );
};

export default Gallery;
