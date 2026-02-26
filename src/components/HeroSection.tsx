import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import CountdownTimer from "./CountdownTimer";
import TypewriterText from "./TypewriterText";
import ModernSpinner from "./ModernSpinner";
import LoginModal from "./LoginModal";

const HeroSection = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        {/* Dotted pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 border border-primary/30 hover:border-primary/60 transition-colors duration-300"
          >
            <span className="text-sm font-medium text-muted-foreground">
              Protocol Activation
            </span>
            <span className="text-sm font-bold text-primary">29 March</span>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mb-12"
          >
            <CountdownTimer />
          </motion.div>

          {/* Logo with Modern Spinner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 100 }}
            className="flex items-center justify-center gap-6 mb-8"
          >
            <div className="relative">
              <ModernSpinner className="w-20 h-20 md:w-24 md:h-24" />
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Evumus AI
            </h1>
          </motion.div>

          {/* Typewriter headline */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 tracking-tight"
          >
            The Future is <TypewriterText />
            <span className="animate-pulse-glow text-primary">|</span>
          </motion.h2>

          {/* Subtitle lines with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="space-y-2 mb-12 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            <p>Where AI meets <span className="font-semibold text-primary bg-primary/10 px-2 py-1 rounded">Web3</span>.</p>
            <p>Where predictions become <span className="font-semibold text-foreground bg-foreground/5 px-2 py-1 rounded">power</span>.</p>
            <p>Where AI Employees <span className="font-semibold text-foreground bg-foreground/5 px-2 py-1 rounded">build your future</span>.</p>
          </motion.div>

          {/* CTA Buttons with Premium Styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9 }}
            className="flex flex-col sm:flex-row gap-5 justify-center mb-20"
          >
            <motion.button
              onClick={() => setIsLoginOpen(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative glass px-8 py-4 rounded-xl border border-primary/50 text-foreground font-semibold flex items-center justify-center gap-2 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Enter the Protocol</span>
              <ArrowRight className="w-5 h-5 relative transition-transform group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass px-8 py-4 rounded-xl border border-muted/50 text-foreground font-semibold transition-all duration-300 hover:border-muted/80 hover:bg-muted/30"
            >
              Explore Vision
            </motion.button>
          </motion.div>

          {/* Stats with enhanced styling */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="flex flex-col sm:flex-row justify-center gap-8 md:gap-16 px-4"
          >
            {[
              { value: "100%", label: "Decentralized" },
              { value: "∞", label: "Intelligence" },
              { value: "0", label: "Limits" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.3 + idx * 0.1 }}
                className="text-center group"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary glow-text transition-all group-hover:scale-110 duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-2 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-primary/50 hover:text-primary/80 transition-colors cursor-pointer"
            >
              <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default HeroSection;
