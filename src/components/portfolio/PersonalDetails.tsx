import { motion } from "framer-motion";
import { User, Calendar, Globe, Heart } from "lucide-react";
import { Section } from "./Section";
import { personalDetails } from "./data";
import { fadeUp, hoverLift, stagger, viewport } from "./motion";

export function PersonalDetails() {
  return (
    <Section id="personal" eyebrow="06 — Personal" title="Personal Details">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="grid gap-4"
      >
        <motion.div
          variants={fadeUp}
          whileHover={hoverLift}
          className="flex items-start gap-5 rounded-2xl p-7 glass hover-smooth sm:p-8"
        >
          <span className="rounded-xl bg-primary/12 p-3 text-primary">
            <Heart size={22} />
          </span>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Interests</h3>
            <p className="mt-1 text-sm leading-relaxed">{personalDetails.interests}</p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          whileHover={hoverLift}
          className="flex items-start gap-5 rounded-2xl p-7 glass hover-smooth sm:p-8"
        >
          <span className="rounded-xl bg-primary/12 p-3 text-primary">
            <Calendar size={22} />
          </span>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Date of Birth</h3>
            <p className="mt-1 text-sm leading-relaxed">{personalDetails.dateOfBirth}</p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          whileHover={hoverLift}
          className="flex items-start gap-5 rounded-2xl p-7 glass hover-smooth sm:p-8"
        >
          <span className="rounded-xl bg-primary/12 p-3 text-primary">
            <Globe size={22} />
          </span>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Known Languages</h3>
            <p className="mt-1 text-sm leading-relaxed">{personalDetails.knownLanguages}</p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          whileHover={hoverLift}
          className="flex items-start gap-5 rounded-2xl p-7 glass hover-smooth sm:p-8"
        >
          <span className="rounded-xl bg-primary/12 p-3 text-primary">
            <User size={22} />
          </span>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Marital Status</h3>
            <p className="mt-1 text-sm leading-relaxed">{personalDetails.maritalStatus}</p>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
