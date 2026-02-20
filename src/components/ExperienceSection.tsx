import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Computer Science Teacher",
    company: "KMC School, Kathmandu",
    period: "2019–2025",
    description: "Taught programming, algorithms, and digital literacy. Designed engaging lessons and supported students in developing technical and problem-solving skills.",
  },
  {
    title: "Programming Instructor",
    company: "Kantipur City College",
    period: "2021–2022",
    description: "Instructed bachelor-level students in Python, Java, and C++. Delivered practical coding exercises and academic mentoring.",
  },
  {
    title: "Salesforce Developer",
    company: "Applikon IT Solution Pvt. Ltd.",
    period: "2022–2023",
    description: "Developed and customized CRM solutions using Apex, Lightning, and Visualforce. Worked on automation, integrations, and workflow optimization.",
  },
  {
    title: "Life Insurance Advisor",
    company: "LIC of India",
    period: "2018–2020",
    description: "",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Experience</p>
        <h2 className="section-title mb-12">Professional Journey</h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title + exp.period}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className={`relative flex flex-col md:flex-row ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-start md:items-center gap-6 md:gap-0`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background -translate-x-1.5 md:-translate-x-1.5 top-6 md:top-auto" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="card-elevated">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase size={16} className="text-accent" />
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{exp.period}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2 italic">{exp.company}</p>
                  {exp.description && (
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
