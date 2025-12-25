export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const cardHover = {
  hover: {
    y: -6,
    scale: 1.02,
    transition: { duration: 0.25 },
  },
};
