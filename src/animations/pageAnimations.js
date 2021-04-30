import gsap from "gsap";
export const exitGallery = () => {
  console.log("exiting");
  const tl = gsap.timeline();

  tl.to(".left-link .gallery-index-links", {
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
    .to(".project-image img", {
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
    .to(".left-link .gallery-index-links", {
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

  tl.fromTo(
    ".wayfinder",
    {
      display: "none",
      opacity: 0,
    },
    {
      opacity: 1,
      delay: 0.5,
      duration: 0.5,
      ease: "power2.in",
      display: "block",
    }
  ).from(".menu-item-title", {
    duration: 0.7,
    y: 260,
    ease: "power2.out",
    delay: -0.5,
    stagger: {
      amount: 0.15,
    },
  });

  tl.from(".menu-item .arrow-0", {
    duration: 0.7,
    y: 260,
    x: -260,
    ease: "power2.out",
    delay: -0.7,
  })
    .from(".menu-item .arrow-1", {
      duration: 0.7,
      x: -260,
      ease: "power2.out",
      delay: -0.7,
    })
    .from(".menu-item .arrow-2", {
      duration: 0.7,
      y: -260,
      x: -260,
      ease: "power2.out",
      delay: -0.7,
    });
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

export const enterProjectPage = () => {
  console.log("Enter Project Page");

  const tl = gsap.timeline();

  tl.from(".hero-img-wrapper", {
    opacity: 0,
    duration: 0.1,
    delay: 0.6,
  })
    .to(".hero-img-wrapper img", {
      opacity: 1,
      duration: 0.8,
      transform: "scale(1)",
      delay: -0.1,
      ease: "power3.out",
    })
    .to(".left-link .all-projects-link", {
      duration: 0.8,
      delay: 0,
      x: 0,
      y: 0,
      ease: "expo.out",
    })

    .to(".animGroup1", {
      duration: 1,
      delay: -0.8,
      x: 0,
      y: 0,
      ease: "expo.out",
      stagger: {
        amount: 0.4,
      },
    })
    .to(".project-subtitle", {
      duration: 0.6,
      delay: -0.8,
      x: 0,
      y: 0,
      ease: "power4.out",
    });
};

export const exitProjectPage = () => {
  console.log("Exit Project Page");

  const tl = gsap.timeline();

  tl.to(".project-page", {
    duration: 0.5,
    css: {
      opacity: 0,
    },
  }).to(".left-link .all-projects-link", {
    y: 35,
    duration: 0.4,
    delay: -0.2,
    ease: "power2.in",
  });
};
