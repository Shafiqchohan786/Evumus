import { motion } from "framer-motion";

const ModernSpinner = ({ className = "" }: { className?: string }) => {
  const segments = 12;

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          {Array.from({ length: segments }).map((_, i) => {
            const angle = (i / segments) * 360;
            const startAngle = angle;
            const endAngle = angle + 25;

            const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
            const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
            const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180);
            const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180);

            const hue = (i / segments) * 360;
            const saturation = 80;
            const lightness = 50;
            const opacity = 0.2 + (i / segments) * 0.8;

            return (
              <motion.line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={`hsl(${hue}, ${saturation}%, ${lightness}%)`}
                strokeWidth="3"
                strokeLinecap="round"
                opacity={opacity}
                animate={{
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 2,
                  delay: (i / segments) * 0.15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </svg>
      </motion.div>

      <motion.div
        className="absolute inset-2 rounded-full border border-primary/30"
        animate={{
          rotate: -360,
          borderColor: ["hsl(174 72% 56% / 0.3)", "hsl(174 72% 56% / 0.6)", "hsl(174 72% 56% / 0.3)"]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            "0 0 20px hsl(174 72% 56% / 0.2), inset 0 0 20px hsl(174 72% 56% / 0.1)",
            "0 0 40px hsl(174 72% 56% / 0.4), inset 0 0 30px hsl(174 72% 56% / 0.2)",
            "0 0 20px hsl(174 72% 56% / 0.2), inset 0 0 20px hsl(174 72% 56% / 0.1)",
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default ModernSpinner;
