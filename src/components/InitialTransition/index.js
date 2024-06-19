import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};
export default function InitialTransition() {
  const [zTransition, setZtransition] = useState(true);
  useState(() => {
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const mountArrow = setTimeout(() => {
      setZtransition(false);
    }, 2500);
    return () => clearTimeout(mountArrow);
  }, []);

  const transitionZindex = zTransition ? 3 : 2;

  return (
    <>
      <div
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          inset: "0",
          zIndex: transitionZindex,
          overflow: "hidden",
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            z: "50",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            background: "#000",
          }}
          initial="initial"
          animate="animate"
          variants={blackBox}
          onAnimationStart={() =>
            document.body.classList.add("overflow-hidden")
          }
          onAnimationComplete={() =>
            document.body.classList.remove("overflow-hidden")
          }
        >
          <motion.svg
            variants={textContainer}
            style={{ position: "absolute", z: "50", display: "flex" }}
          >
            <pattern
              id="pattern"
              patternUnits="userSpaceOnUse"
              width={750}
              height={800}
              style={{ color: "#fff" }}
            >
              <rect
                style={{ width: "100%", height: "100%", fill: "currentcolor" }}
              />
              <motion.rect
                variants={text}
                style={{
                  width: "100%",
                  height: "100%",
                  color: "gray",
                  fill: "currentcolor",
                }}
              />
            </pattern>
            <text
              textAnchor="middle"
              x="50%"
              y="50%"
              style={{
                fontSize: "2.25rem",
                fontWeight: "bold",
                fill: "url(#pattern)",
              }}
            >
              Abraham SM
            </text>
          </motion.svg>
        </motion.div>
      </div>
    </>
  );
}
