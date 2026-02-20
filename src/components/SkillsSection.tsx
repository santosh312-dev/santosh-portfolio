import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Web & Software Development",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Python", "Django", "MySQL", "REST APIs"],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "C", "Basic Java"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git & GitHub", "VS Code", "Salesforce (Apex, Lightning, Visualforce)"],
  },
  {
    title: "Teaching & Professional",
    skills: ["Curriculum Development", "Student Engagement", "Technical Training", "Public Speaking"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-secondary/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Skills</p>
          <h2 className="section-title mb-12">What I Bring to the Table</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-elevated"
            >
              <h3 className="font-display font-semibold text-lg text-foreground mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-accent/10 text-accent-foreground border border-accent/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
