import { motion } from "framer-motion";
import { Zap, Target, Bot } from "lucide-react";
import SystemDashboard from "./SystemDashboard";

const features = [
  { icon: Zap, title: "Miners", desc: "Fuel the Network" },
  { icon: Target, title: "Predictions", desc: "Shape Reality" },
  { icon: Bot, title: "AI Employees", desc: "Earn Forever" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const VisionSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle bg gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      {/* Dotted pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Dashboard */}
          <SystemDashboard />

          {/* Right: Content */}
          <div className="space-y-10">
            <motion.span
              {...fadeUp}
              className="inline-block glass px-4 py-2 rounded-full text-xs font-semibold tracking-widest text-primary uppercase border border-primary/30 hover:border-primary/60 transition-colors"
            >
              The Vision
            </motion.span>

            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-foreground"
            >
              Earning the <span className="text-gradient-hero bg-clip-text text-transparent">Future</span>
              <br />Not Just Finances
            </motion.h2>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-base md:text-lg font-light">
                This isn't just another token. This is the{" "}
                <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded-md">genesis of a synthetic workforce</span>.
                A system where your participation doesn't just grant access — it creates the foundation for a fully autonomous economy.
              </p>
              <p className="text-base md:text-lg font-light">
                Through <span className="text-foreground font-semibold bg-foreground/5 px-2 py-1 rounded-md">collective intelligence</span>,
                we are engineering a living ecosystem that learns, adapts, and evolves.
                Every prediction strengthens the network. Every action fuels the revolution.
              </p>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass rounded-xl p-8 border-l-4 border-primary/70 text-xl md:text-2xl font-display font-semibold text-foreground leading-snug hover:border-primary hover:bg-primary/5 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">
                "When AI controls jobs, those who own the infrastructure own{" "}
                <span className="text-gradient-hero bg-clip-text text-transparent">the future</span>."
              </span>
            </motion.blockquote>
          </div>
        </div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-24 max-w-3xl mx-auto"
        >
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="glass rounded-2xl p-8 text-center group cursor-pointer border border-border/50 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 border border-primary/30 group-hover:border-primary/60">
                  <f.icon className="w-7 h-7 text-primary group-hover:text-accent group-hover:scale-125 transition-all" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{f.title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors font-medium">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
