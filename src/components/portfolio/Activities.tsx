import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { Section } from "./Section";
import { extracurricular } from "./data";
import { fadeUp, hoverLift, stagger, viewport } from "./motion";

export function Activities() {
  return (
    <Section id="activities" eyebrow="05 — Activities" title="Extracurricular Activities">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="grid gap-4"
      >
        {extracurricular.map((activity) => (
          <motion.div
            key={activity}
            variants={fadeUp}
            whileHover={hoverLift}
            className="flex items-start gap-5 rounded-2xl p-7 glass hover-smooth sm:p-8"
          >
            <span className="rounded-xl bg-primary/12 p-3 text-primary">
              <Trophy size={22} />
            </span>
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground">{activity}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
