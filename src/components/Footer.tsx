import { Facebook, Instagram, Youtube, Github, Download } from "lucide-react";

const socialLinks = [
  { href: "https://www.facebook.com/KooolSantosh", icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/", icon: Instagram, label: "Instagram" },
  { href: "https://www.youtube.com/c/KoolSantosh", icon: Youtube, label: "YouTube - KoolSantosh" },
  { href: "https://www.youtube.com/c/makeeasyy", icon: Youtube, label: "YouTube - MakeEasyy" },
  { href: "https://github.com/santosh312-dev", icon: Github, label: "GitHub" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-accent transition-colors"
              aria-label={link.label}
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>
        <a
          href="https://drive.google.com/file/d/17iOGx9cyx1Q3Aa49TJE3AGfOD7hl4scL/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
        >
          <Download size={14} />
          Download Resume
        </a>
        <p className="text-muted-foreground text-sm">
          © 2026 Santosh Sharma | Developer • Mentor • Technology Enthusiast
        </p>
      </div>
    </footer>
  );
};

export default Footer;
