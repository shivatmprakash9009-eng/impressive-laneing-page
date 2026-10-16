"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import SectionHeading from "@/components/sections/section-heading";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormStatus = "idle" | "invalid" | "ready";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState<FormValues>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  function updateField(field: keyof FormValues, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setStatus("idle");
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !emailPattern.test(form.email) || !form.message.trim()) {
      setStatus("invalid");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(`Name: ${form.name.trim()}\nEmail: ${form.email}\n\n${form.message.trim()}`);
    setStatus("ready");
    window.location.href = `mailto:anurag@example.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="contact section-wrap" id="contact" aria-labelledby="contact-title">
      <SectionHeading eyebrow="HAVE SOMETHING IN MIND?" title="Let’s make it real." index="03" id="contact-title" />
      <div className="contact-grid">
        <div className="contact-copy reveal-up">
          <p className="contact-lead">Good work starts with a <span>good conversation.</span></p>
          <p>Have a product idea, a collaboration in mind, or just want to talk about design and development? My inbox is open.</p>
          <div className="contact-details">
            <a href="mailto:anurag@example.com" className="contact-detail">
              <span className="detail-icon"><Mail size={16} /></span>
              <span><strong>anurag@example.com</strong></span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <form className="contact-form reveal-up" onSubmit={submit} noValidate>
          <div className="form-heading">
            <div><h3>Send a message<span>.</span></h3></div>
          </div>
          <div className="form-field">
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" type="text" required placeholder="How should I call you?" autoComplete="name" value={form.name} onChange={(event) => updateField("name", event.target.value)} aria-invalid={status === "invalid" && !form.name.trim()} />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" autoComplete="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} aria-invalid={status === "invalid" && !emailPattern.test(form.email)} />
          </div>
          <div className="form-field">
            <label htmlFor="message">What’s on your mind?</label>
            <textarea id="message" name="message" rows={4} required placeholder="Tell me a little about your project..." value={form.message} onChange={(event) => updateField("message", event.target.value)} aria-invalid={status === "invalid" && !form.message.trim()} />
          </div>
          {status === "invalid" && <p className="form-error" role="alert">Please complete all fields with a valid email address.</p>}
          {status === "ready" && <p className="form-success" role="status">Opening your email app with the message drafted.</p>}
          <button type="submit" className="button button-primary form-submit">Send message <Send size={15} /></button>
        </form>
      </div>
    </section>
  );
}
