// src/components/ScrollVelocity.tsx
import React, { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

interface Props {
  children: React.ReactNode;
  velocityX?: number;
  velocityY?: number;
  className?: string;
}

const ScrollVelocity: React.FC<Props> = ({
  children,
  velocityX = 80,
  velocityY = 0,
  className = "",
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    const moveX = (velocityX * delta) / 1000;
    const moveY = (velocityY * delta) / 1000;

    x.set(x.get() + moveX);
    y.set(y.get() + moveY);
  });

  return (
    <div className={`overflow-hidden w-full h-full ${className}`}>
      <motion.div style={{ x, y }} className="flex whitespace-nowrap">
        <div className="flex items-center">{children}</div>
        <div className="flex items-center">{children}</div>
      </motion.div>
    </div>
  );
};

export default ScrollVelocity;
