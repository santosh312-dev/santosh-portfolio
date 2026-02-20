import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-secondary/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Contact</p>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle mb-12">
            I'm open to collaborations, training opportunities, and software development projects. Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                <a href="mailto:santosh.sharma.dev312@gmail.com" className="text-foreground font-medium text-sm hover:text-accent transition-colors">
                  santosh.sharma.dev312@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                <a href="tel:+9779840634136" className="text-foreground font-medium text-sm hover:text-accent transition-colors">
                  +977-9840634136
                </a>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://www.facebook.com/KooolSantosh" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://github.com/santosh312-dev" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.youtube.com/c/KoolSantosh" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-sm"
            />
            <textarea
              placeholder="Your Message"
              required
              maxLength={1000}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-sm resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-accent-foreground transition-all duration-300 hover:scale-105"
              style={{ backgroundImage: "var(--gold-gradient)" }}
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
