import { motion } from "framer-motion";
import { Bot, Vote, Globe, Cloud, AppWindow, Server } from "lucide-react";

const projects = [
  {
    icon: Bot,
    title: "Robotics & STEM Projects",
    description: "Designed line-following robots, IoT models, and automation systems. Conducted workshops to promote hands-on STEM learning.",
  },
  {
    icon: Vote,
    title: "School Election Web Application",
    description: "Built a secure real-time voting system using Django, Tailwind CSS, and JavaScript with live vote counting and candidate management.",
  },
  {
    icon: Globe,
    title: "Client Portfolio & Business Websites",
    description: "Developed responsive websites for individuals and businesses using Django and WordPress, including blogs, contact forms, and eCommerce features.",
  },
  {
    icon: Cloud,
    title: "Salesforce CRM Development",
    description: "Created Lightning components, Apex logic, and workflow automation to improve business processes.",
  },
  {
    icon: AppWindow,
    title: "Python Desktop & Mobile Apps",
    description: "Built GUI applications using Tkinter and Kivy such as library systems, calculators, and productivity tools.",
  },
  {
    icon: Server,
    title: "Django Full Stack Applications",
    description: "Developed CRUD-based applications with authentication, REST APIs, and database integration for learning and teaching purposes.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-secondary/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Projects</p>
          <h2 className="section-title mb-12">Things I've Built</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="card-elevated group"
            >
              <div className="p-3 rounded-lg bg-accent/10 text-accent w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <project.icon size={24} />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
