import { ArrowUpRight, Command } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer section-wrap">
      <div className="footer-top">
        <a href="#home" className="brand" aria-label="Return to Anurag portfolio home">
          <span className="brand-mark"><Command size={16} /></span>
          <span>anurag<span className="brand-dot">.</span></span>
        </a>
        <a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={14} /></a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Anurag. All rights reserved.</span>
      </div>
    </footer>
  );
}
