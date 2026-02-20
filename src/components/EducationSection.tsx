import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Education & Achievements</p>
        <h2 className="section-title mb-12">Academic Background</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card-elevated"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
              <GraduationCap size={22} />
            </div>
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">2023–2025</span>
          </div>
          <h3 className="font-display font-bold text-xl text-foreground">Master of Information Technology</h3>
          <p className="text-muted-foreground mt-1">IUKL University</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card-elevated"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
              <GraduationCap size={22} />
            </div>
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">2015–2018</span>
          </div>
          <h3 className="font-display font-bold text-xl text-foreground">BSc in Information Technology</h3>
          <p className="text-muted-foreground mt-1">RTMNU University</p>
        </motion.div>
      </div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="font-display font-semibold text-xl text-foreground mb-6">Achievements & Activities</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="card-elevated flex items-start gap-4">
            <Award size={20} className="text-accent mt-0.5 shrink-0" />
            <p className="text-sm text-foreground">Recognized as <strong>Prominent Teacher</strong> by PABSON Kathmandu</p>
          </div>
          <div className="card-elevated flex items-start gap-4">
            <Award size={20} className="text-accent mt-0.5 shrink-0" />
            <p className="text-sm text-foreground">Volunteer – <strong>Cyber Security Awareness Program</strong> (Quick Heal Foundation)</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;
