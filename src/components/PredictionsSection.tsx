import { motion } from "framer-motion";
import { Brain, ShieldCheck, TrendingUp, CalendarPlus } from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "AI Training Ground",
    stat: "24/7",
    statLabel: "Learning",
    desc: "Every prediction trains the AI. Every forecast shapes the protocol. Your predictions aren't just guesses — they're training data for a superintelligent system.",
  },
  {
    icon: ShieldCheck,
    title: "No-Loss Participation",
    stat: "100%",
    statLabel: "Assets Protected",
    desc: "Stake to participate in prediction windows. Win to reduce staking duration and unlock miner boosts. Lose to extend the period — your assets are always protected.",
  },
  {
    icon: TrendingUp,
    title: "Trust & Reputation",
    stat: "∞",
    statLabel: "Growth Potential",
    desc: "Accurate forecasts build your reputation. High reputation unlocks better protocol benefits, validation power, and improved limits on trusted events.",
  },
  {
    icon: CalendarPlus,
    title: "Create Own Events",
    stat: "∞",
    statLabel: "Event Freedom",
    desc: "Launch prediction windows on any topic, or clone and adjust existing ones. With smart AI verification and top predictor support, the system autonomously validates results. Earn additional benefits based on your event's volume.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const PredictionsSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span
            {...fadeUp}
            className="inline-block glass px-5 py-2 rounded-full text-xs font-semibold tracking-widest text-primary uppercase mb-8 border border-primary/30 hover:border-primary/60 transition-colors"
          >
            PREDICTME.AI
          </motion.span>

          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight mb-8"
          >
            Your <span className="text-gradient-hero bg-clip-text text-transparent">Insight</span>
            <br />
            <span className="text-foreground">Is Your Power</span>
          </motion.h2>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed font-light"
          >
            Create your own prediction windows on world events. Make <span className="text-foreground font-semibold">yes/no predictions</span>.
            Win to unlock <span className="text-primary font-semibold">miner upgrades and reduced staking time</span>. Never lose your assets.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-2xl p-8 group cursor-pointer border border-border/50 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                {/* Top row: Title + Stat */}
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-gradient-hero bg-clip-text text-transparent leading-tight">
                    {card.title}
                  </h3>
                  <div className="text-right shrink-0 ml-4">
                    <div className="text-3xl md:text-4xl font-display font-bold text-primary group-hover:text-accent transition-colors">
                      {card.stat}
                    </div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {card.statLabel}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-light group-hover:text-foreground/80 transition-colors">
                  {card.desc}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className="mt-7 h-0.5 rounded-full bg-gradient-to-r from-primary via-secondary to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PredictionsSection;
