import { ArrowUpRight, Command, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer section-wrap">
      <div className="footer-top">
        <a href="#home" className="brand" aria-label="Return to Anurag portfolio home">
          <span className="brand-mark"><Command size={16} /></span>
          <span>anurag<span className="brand-dot">.</span></span>
        </a>
        <p>Thoughtfully made. <span>Intentionally different.</span></p>
        <a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={14} /></a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Anurag. All rights reserved.</span>
        <span className="footer-note">DESIGNED WITH CURIOSITY · BUILT WITH CARE</span>
        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a>
          <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="Twitter / X"><span className="x-icon">𝕏</span></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
