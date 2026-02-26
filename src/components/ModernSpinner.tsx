import { motion } from "framer-motion";

const ModernSpinner = ({ className = "" }: { className?: string }) => {
  const segments = 12;

  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ background: "transparent" }}>
      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-lg"
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: segments }).map((_, i) => {
          const angle = (i / segments) * 360;
          const radius = 38;

          const x1 = 50 + radius * Math.cos((angle * Math.PI) / 180);
          const y1 = 50 + radius * Math.sin((angle * Math.PI) / 180);

          const x2 = 50 + (radius - 12) * Math.cos((angle * Math.PI) / 180);
          const y2 = 50 + (radius - 12) * Math.sin((angle * Math.PI) / 180);

          const hueStart = 270;
          const hueEnd = 50;
          const hueRange = hueEnd - hueStart;
          const hue = hueStart + (hueRange * i) / segments;

          const opacity = 0.3 + (i / segments) * 0.7;

          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={`hsl(${hue}, 100%, 60%)`}
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity={opacity}
              animate={{
                opacity: [0.3 + (i / segments) * 0.7, 1, 0.3 + (i / segments) * 0.7],
              }}
              transition={{
                duration: 2,
                delay: (i / segments) * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </motion.svg>

      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            "0 0 15px hsl(270 100% 60% / 0.3), 0 0 30px hsl(50 100% 60% / 0.2)",
            "0 0 25px hsl(270 100% 60% / 0.5), 0 0 50px hsl(50 100% 60% / 0.3)",
            "0 0 15px hsl(270 100% 60% / 0.3), 0 0 30px hsl(50 100% 60% / 0.2)",
          ]
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        pointerEvents="none"
      />
    </div>
  );
};

export default ModernSpinner;
