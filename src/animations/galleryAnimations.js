import gsap from "gsap";

export const greyOut = (list) => {
  const tl = gsap.timeline();

  tl.to(list, {
    duration: 0.7,
    css: {
      filter: "grayscale(100%)",
      opacity: 0.7,
    },
    ease: "power2.inout",
  });
};

export const colorIn = (list) => {
  const tl = gsap.timeline();

  tl.to(list, {
    duration: 0.7,
    css: {
      filter: "grayscale(0%)",
      opacity: 1,
    },
    ease: "power2.inout",
  });
};
