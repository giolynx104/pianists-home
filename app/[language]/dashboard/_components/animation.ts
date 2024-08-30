export const appearAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0 },
};

export const slideInLeft = {
  initial: {
    x: "-100%",
    opacity: 0,
  },
  animate: {
    x: "0%",
    opacity: 1,
    transition: {
      type: "static",
      stiffness: 100,
      ease: "easeInOut",
      duration: 1.5,
    },
  },
};

export const slideInRight = {
  initial: {
    x: "100%",
    opacity: 0,
  },
  animate: {
    x: "0%",
    opacity: 1,
    transition: {
      type: "static",
      stiffness: 100,
      ease: "easeInOut",
      duration: 1.5,
    },
  },
};
