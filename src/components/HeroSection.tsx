import { motion } from "framer-motion";
import { ArrowDown, Briefcase, Mail, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/santosh-profile.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 md:py-0">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-accent font-medium text-lg mb-3"
            >
              👋 Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5 leading-tight"
            >
              Santosh Sharma
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-primary-foreground/70 text-base sm:text-lg mb-4 font-medium"
            >
              Computer Teacher &nbsp;|&nbsp; Full Stack Developer &nbsp;|&nbsp; Robotics & STEM Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-primary-foreground/55 max-w-xl text-sm sm:text-base mb-8 leading-relaxed"
            >
              I am an experienced Computer Science teacher and full stack developer with over 8 years in education and software development. I specialize in building modern web applications and making complex technical concepts simple and engaging for students.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-accent-foreground transition-all duration-300 hover:scale-105"
                style={{ backgroundImage: "var(--gold-gradient)" }}
              >
                <Briefcase size={18} />
                View My Work
              </a>
              <a
                href="https://drive.google.com/file/d/17iOGx9cyx1Q3Aa49TJE3AGfOD7hl4scL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="order-1 md:order-2 shrink-0"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-accent/20 animate-pulse" />
              <div className="absolute -inset-6 rounded-full border border-accent/10" />
              <img
                src={profilePhoto}
                alt="Santosh Sharma"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-accent/30 shadow-2xl shadow-accent/10"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" className="text-primary-foreground/40 hover:text-accent transition-colors animate-bounce block">
          <ArrowDown size={28} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
