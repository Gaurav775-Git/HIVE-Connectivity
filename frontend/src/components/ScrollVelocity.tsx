// src/components/ScrollVelocity.tsx
import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

interface Props {
  children: React.ReactNode;
  velocity?: number;
  className?: string;
  pauseOnHover?: boolean;
}

const ScrollVelocity: React.FC<Props> = ({
  children,
  velocity = 80,
  className = "",
  pauseOnHover = true,
}) => {
  const x = useMotionValue(0);
  const pausedRef = useRef(false);

  useAnimationFrame((_, delta) => {
    if (pausedRef.current) return;
    const moveBy = (velocity * delta) / 1000;
    x.set(x.get() - moveBy);
  });

  return (
    <div
      className={`overflow-hidden w-full ${className}`}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <motion.div style={{ x }} className="flex whitespace-nowrap">
        <div className="flex items-center">{children}</div>
        <div className="flex items-center">{children}</div>
      </motion.div>
    </div>
  );
};

export default ScrollVelocity;
