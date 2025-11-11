import { motion } from "framer-motion";

const BlurText = ({ text, className = "", delay = 0 }) => {
  // Split text into words
  const words = text.split(" ");

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ filter: "blur(10px)", opacity: 0, y: 10 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{
            delay: delay / 1000 + index * 0.2, // delay in seconds
            duration: 0.6,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default BlurText;
