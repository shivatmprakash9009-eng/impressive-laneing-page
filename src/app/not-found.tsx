import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Command } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-glow" aria-hidden="true" />
      <Link href="/" className="brand not-found-brand" aria-label="Anurag portfolio home">
        <span className="brand-mark"><Command size={17} /></span>
        <span>anurag<span className="brand-dot">.</span></span>
      </Link>
      <section className="not-found-content" aria-labelledby="not-found-title">
        <p className="eyebrow">ERROR / 404</p>
        <div className="not-found-code" aria-hidden="true">404</div>
        <h1 id="not-found-title">Looks like you took the scenic route.</h1>
        <p>The page you’re looking for isn’t here. The good stuff is still one click away.</p>
        <div className="not-found-actions">
          <Link href="/" className="button button-primary"><ArrowLeft size={15} /> Back home</Link>
          <Link href="/#work" className="button button-quiet">Explore the work <ArrowUpRight size={15} /></Link>
        </div>
      </section>
      <div className="not-found-bottom"><span>ANURAG / DIGITAL CRAFT</span><span>404 — PAGE NOT FOUND</span></div>
    </main>
  );
}
