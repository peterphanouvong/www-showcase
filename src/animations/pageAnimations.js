import gsap from "gsap";
export const exitGallery = () => {
  console.log("exiting");
  const tl = gsap.timeline();

  tl.to(".left-link h2", {
    y: 35,
    duration: 0.4,
    ease: "power1.in",
  })
    .to(".south-east-arrow", {
      opacity: 0,
      duration: 0.4,
      delay: -0.3,
    })
    .to(".carousel", {
      opacity: 0,
      delay: -0.3,
      duration: 0.4,
      ease: "power4.inout",
    })
    .to(".project-image", {
      transform: "translateX(-100px)",
      delay: -0.3,
      duration: 0.4,
      ease: "power4.inout",
    })
    .set(".gallery", {
      display: "none",
    });
};

export const enterGallery = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    ".gallery",
    {
      display: "none",
    },
    {
      delay: 0.5,
      display: "block",
    }
  )
    .fromTo(
      ".project-item",
      {
        opacity: 0,
        duration: 0.7,
        x: 50,
        ease: "power2.out",
      },
      {
        opacity: 1,
        // delay: 1,
        x: 0,
        duration: 0.7,
        ease: "power2.out",
      }
    )
    .to(".project-image-wrapper", {
      delay: -0.7,
      duration: 0,
      opacity: 1,
    })
    .to(".project-image", {
      delay: -0.7,
      duration: 0.5,
      opacity: 1,
      transform: "translateX(0)",
    })
    .to([".name h3", ".technologies h4"], {
      // duration: 100,
      delay: -0.5,
      transform: "translateY(0)",
    })
    .set(".project-image-wrapper", {
      css: {
        backgroundColor: "white",
      },
    })
    .to(".left-link h2", {
      y: 0,
      duration: 1,
      delay: -0.8,
      ease: "power2.out",
    })
    .to(".south-east-arrow", {
      // duration: 1,
      duration: 1,
      delay: -0.8,
      transform: "translate3d(0,0,0)",
      ease: "power2.out",
    });
};

export const enterWayFinder = () => {
  console.log("enter way finder");

  const tl = gsap.timeline();

  tl.set(".wayfinder", {
    display: "block",
  }).fromTo(
    ".wayfinder",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      delay: 0.5,
      duration: 0.5,
      ease: "power2.in",
    }
  );
};

export const exitWayFinder = () => {
  console.log("EXIT way finder");

  const tl = gsap.timeline();

  tl.to(".wayfinder", {
    css: { opacity: 0 },
    // delay: 1,
    duration: 0.5,
    ease: "power2.out",
  }).to(".wayfinder", {
    // delay: 0.5,
    display: "none",
  });
};
