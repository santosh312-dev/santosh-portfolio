import { motion } from "framer-motion";
import { Code, GraduationCap, Bot, ShieldCheck, Brain } from "lucide-react";

const highlights = [
  { icon: Code, label: "Full Stack Developer (Django, React, MySQL, JavaScript)" },
  { icon: GraduationCap, label: "8+ Years Teaching Computer Science" },
  { icon: Bot, label: "Robotics & STEM Project Mentor" },
  { icon: ShieldCheck, label: "Cyber Security Awareness Volunteer" },
  { icon: Brain, label: "Strong in simplifying complex tech concepts" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">About Me</p>
        <h2 className="section-title">Bridging Education & Technology</h2>
        <p className="section-subtitle mb-10">
          I am passionate about both teaching and technology. My journey combines classroom instruction with real-world software development. I enjoy building full stack applications using modern frameworks and also mentoring students through robotics and STEM projects. My goal is to bridge the gap between education and practical technology.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {highlights.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="card-elevated flex items-start gap-4"
          >
            <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0">
              <item.icon size={22} />
            </div>
            <p className="text-sm text-foreground font-medium leading-relaxed">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
