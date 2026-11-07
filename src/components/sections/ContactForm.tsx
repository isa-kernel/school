"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Send } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General enquiry");
  const [message, setMessage] = useState("");
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setNotice("Please complete all required fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setNotice("Please enter a valid email address.");
      return;
    }

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Enquiry type: ${subject}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:admissions@northstar.example?subject=${encodeURIComponent(
      `Northstar enquiry — ${subject}`,
    )}&body=${encodeURIComponent(body)}`;

    setNotice("Your email application is opening with your enquiry prepared.");
    window.location.href = mailto;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-heading">
        <span className="section-index">01 / SEND A MESSAGE</span>
        <p className="eyebrow">WE WOULD LOVE TO HEAR FROM YOU</p>
        <h2>
          Let`s start a
          <br />
          <em>conversation.</em>
        </h2>
      </div>

      <div className="contact-form-grid">
        <label className="contact-field">
          <span>YOUR NAME *</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder="How should we address you?"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>

        <label className="contact-field">
          <span>EMAIL ADDRESS *</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>

        <label className="contact-field contact-field-full">
          <span>WHAT IS THIS ABOUT?</span>
          <select
            name="subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          >
            <option>General enquiry</option>
            <option>Admissions</option>
            <option>Arrange a school visit</option>
            <option>Academic information</option>
            <option>School partnership</option>
            <option>Other</option>
          </select>
        </label>

        <label className="contact-field contact-field-full">
          <span>YOUR MESSAGE *</span>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us a little about what you would like to know..."
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </label>
      </div>

      {notice && (
        <p className="contact-form-notice" role="status">
          <CheckCircle2 size={16} />
          {notice}
        </p>
      )}

      <div className="contact-form-bottom">
        <p>
          Fields marked with * are required. Your email application will open
          with the message prepared.
        </p>
        <button type="submit" className="contact-submit">
          PREPARE ENQUIRY <Send size={15} />
        </button>
      </div>
    </form>
  );
}