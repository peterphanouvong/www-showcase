import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { MdArrowForward } from "react-icons/md";

import heroImg from "../../images/gallery-2.png";
import southEast from "../../images/southeast.svg";
import { useParams } from "react-router";

const projects = [
  {
    title: "Agency",
    link: "https://amazing-torvalds-1e6281.netlify.app/",
    modelTitle: "MelRiver",
    moodelLink: "https://melriver.com/",
    description:
      "I saw it as an opportunity to practice some clean animations and upgrade my skills in building an emersive user experience.",
    technologies: [
      "React",
      "Greensock Animation Platform (GSAP)",
      "Syntactically Awesome Style Sheets (SASS)",
    ],
  },
  {
    title: "A Restaurant",
    link: "https://infallible-gates-502421.netlify.app/",
    modelTitle: "Balausta Restaurante",
    moodelLink: "https://www.restaurantebalausta.com/",
    description:
      "This project was used to practice making real world websites for restaurants. I tried to emulate the simple and refined aesthetic.",
    technologies: [
      "React",
      "Greensock Animation Platform (GSAP)",
      "Syntactically Awesome Style Sheets (SASS)",
    ],
  },
  {
    title: "Agency",
    link: "https://amazing-torvalds-1e6281.netlify.app/",
    modelTitle: "MelRiver",
    moodelLink: "https://melriver.com/",
    description:
      "I saw it as an opportunity to practice some clean animations and upgrade my skills in building an emersive user experience.",
    technologies: [
      "React",
      "Greensock Animation Platform (GSAP)",
      "Syntactically Awesome Style Sheets (SASS)",
    ],
  },
];

export const ProjectPage = () => {
  const [offset, setOffset] = useState(0);
  const [zoom, setZoom] = useState(1);

  const { id } = useParams();
  console.log("id", id);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".project-details", {
      transform: `translateY(${offset}px)`,
      duration: 1,
      ease: "power3.out",
    }).to(".hero-img-wrapper img", {
      delay: -1,
      transform: `scale(${zoom})`,
      duration: 1,
      ease: "power3.out",
    });
  }, [offset]);

  console.log(offset);

  const scroll = (e) => {
    const diff = -e.deltaY + offset;
    console.log("windo", window.innerHeight);
    if (diff < 0) {
      if (diff <= -window.innerHeight) {
        setOffset(-window.innerHeight);
      } else {
        setOffset(diff);
      }
    } else {
      setOffset(0);
    }

    const zoomDiff = zoom + e.deltaY / 5000;
    if (zoomDiff < 1) {
      setZoom(1);
    } else {
      setZoom(zoom + e.deltaY / 5000);
    }
  };

  return id ? (
    <div className="project-page" onWheel={scroll}>
      <div className="hero">
        <div className="hero-img-wrapper">
          <img src={heroImg} alt="" width="550px" height="300px" />
        </div>
        <div className="project-info-wrapper">
          <div className="arrow-wrapper">
            <img className="animGroup1" src={southEast} width="100%" />
          </div>
          <div className="project-text-wrapper">
            <div className="project-title-wrapper">
              <h1 className="project-title animGroup1">{projects[id].title}</h1>
            </div>
            <div className="project-subtitle-wrapper">
              <h3 className="project-subtitle">
                <a
                  target="_blank"
                  referrerPolicy="no-referrer"
                  href={projects[id].link}
                >
                  {projects[id].link}
                  <MdArrowForward size="48px" />
                </a>
              </h3>
            </div>
          </div>
          <div className="project-title-footer">
            <div className="overflow-container">
              <div className="year animGroup1">2021</div>
            </div>
            <div className="overflow-container">
              <div className="tech animGroup1">
                {projects[id].modelTitle} Clone
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-details">
        <div className="overview">
          <div className="overview-left">
            <img src="" alt="" />
          </div>
          <div className="overview-right">
            <h2>
              <span className="tabbed">This </span>
              <span>
                project was based on the{" "}
                <a
                  target="_blank"
                  href={projects[id].moodelLink}
                  referrerPolicy="no-referrer"
                >
                  {projects[id].modelTitle}
                </a>{" "}
                Awwwards website.
                <span> {projects[id].description}</span>
              </span>
            </h2>

            <div className="services">
              {projects[id].technologies.map((service, i) => {
                return (
                  <div className="service" key={i}>
                    <div className="number">
                      {i.toLocaleString("en-US", {
                        minimumIntegerDigits: 2,
                        useGrouping: false,
                      })}
                    </div>
                    <div className="name">{service}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
