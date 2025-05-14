import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

const FadeInOnScroll = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: FadeInOnScrollProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directions = {
    up: { initial: { y: 50 }, animate: { y: 0 } },
    down: { initial: { y: -50 }, animate: { y: 0 } },
    left: { initial: { x: 50 }, animate: { x: 0 } },
    right: { initial: { x: -50 }, animate: { x: 0 } },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction].initial }}
      animate={
        isInView
          ? { opacity: 1, ...directions[direction].animate }
          : { opacity: 0, ...directions[direction].initial }
      }
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll; 