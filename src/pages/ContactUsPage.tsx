// Contact.tsx
// Move your image to: src/assets/Contactusbg.jpg  (already referenced below)
// Rename uploaded image to: Contactusbg.jpg

import React, { useState } from "react";
import bgImage from "../../src/assets/download3.jpg";
import Navigation from "../components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

const Contact = () => {
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        .contact-root {
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Page layout ── */
        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: calc(100vh - 64px);
        }

        @media (max-width: 900px) {
          .contact-wrapper { grid-template-columns: 1fr; }
          .contact-image-panel { min-height: 45vh; }
        }

        /* ── Left: image panel ── */
        .contact-image-panel {
          position: relative;
          overflow: hidden;
        }

        .contact-image-panel img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.8s ease;
        }

        .contact-image-panel:hover img {
          transform: scale(1.03);
        }

        /* Gradient overlay: left=dark, right=transparent so it blends into form */
        .contact-image-panel::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            rgba(18, 42, 22, 0.55) 0%,
            rgba(18, 42, 22, 0.18) 55%,
            rgba(18, 42, 22, 0.45) 100%
          );
        }

        /* Text badge over image */
        .image-badge {
          position: absolute;
          bottom: 48px;
          left: 48px;
          z-index: 10;
          color: #fff;
          max-width: 320px;
        }

        .image-badge .eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #d4edaa;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .image-badge .eyebrow::before {
          content: '';
          display: inline-block;
          width: 28px;
          height: 1px;
          background: #d4edaa;
        }

        .image-badge h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600;
          line-height: 1.15;
          margin: 0 0 16px;
          color: #fff;
        }

        .image-badge p {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(255,255,255,0.82);
          margin: 0;
        }

        /* Contact info chips */
        .info-chips {
          margin-top: 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .info-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: rgba(255,255,255,0.88);
          font-weight: 400;
        }

        .info-chip .icon-wrap {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          backdrop-filter: blur(4px);
        }

        /* ── Right: form panel ── */
        .contact-form-panel {
          background: #f7f3ee;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 48px;
        }

        @media (max-width: 600px) {
          .contact-form-panel { padding: 40px 24px; }
          .image-badge { left: 24px; bottom: 28px; }
        }

        .form-inner {
          width: 100%;
          max-width: 420px;
        }

        /* Heading */
        .form-heading {
          margin-bottom: 36px;
        }

        .form-heading .label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #7a8c52;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .form-heading .label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #c8d0a8;
        }

        .form-heading h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 4vw, 3rem);
          font-weight: 700;
          color: #1e2d16;
          line-height: 1.1;
          margin: 0 0 12px;
        }

        .form-heading h1 em {
          font-style: italic;
          color: #5e7a2a;
        }

        .form-heading p {
          font-size: 14px;
          color: #6b7563;
          line-height: 1.6;
          margin: 0;
        }

        /* Field group */
        .field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 480px) {
          .field-row { grid-template-columns: 1fr; }
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }

        .field label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7a8c52;
          transition: color 0.2s;
        }

        .field.focused label {
          color: #3d5c1a;
        }

        .field input,
        .field textarea {
          background: #fff;
          border: 1.5px solid #dde3cc;
          border-radius: 10px;
          padding: 12px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #1e2d16;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .field input::placeholder,
        .field textarea::placeholder {
          color: #b0b8a0;
        }

        .field input:focus,
        .field textarea:focus {
          border-color: #7aaa35;
          box-shadow: 0 0 0 3px rgba(122,170,53,0.12);
        }

        .field textarea {
          resize: none;
          min-height: 110px;
          line-height: 1.6;
        }

        /* Submit button */
        .submit-btn {
          width: 100%;
          height: 52px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, #2d5016 0%, #5a8a20 50%, #7aaa35 100%);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.04em;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: transform 0.18s, box-shadow 0.18s, opacity 0.18s;
          box-shadow: 0 4px 20px rgba(90,138,32,0.3);
          position: relative;
          overflow: hidden;
          margin-top: 8px;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #3d6e1f, #7aaa35);
          opacity: 0;
          transition: opacity 0.2s;
        }

        .submit-btn:hover::before { opacity: 1; }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(90,138,32,0.38);
        }

        .submit-btn:active { transform: translateY(0); }

        .submit-btn span, .submit-btn svg {
          position: relative;
          z-index: 1;
        }

        /* Success state */
        .success-msg {
          text-align: center;
          padding: 28px 0 8px;
          animation: fadeUp 0.4s ease;
        }

        .success-msg .check {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #5a8a20, #7aaa35);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          box-shadow: 0 4px 20px rgba(90,138,32,0.3);
        }

        .success-msg h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          color: #1e2d16;
          margin: 0 0 8px;
        }

        .success-msg p {
          font-size: 14px;
          color: #6b7563;
        }

        /* Divider */
        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #dde3cc, transparent);
          margin: 28px 0;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .form-inner {
          animation: fadeUp 0.5s ease;
        }
      `}</style>

      <div className="contact-root w-full min-h-screen flex flex-col">
        <Navigation />

        <div className="contact-wrapper flex-1">

          {/* ── Left: Image Panel ── */}
          <div className="contact-image-panel">
            <img src={bgImage} alt="Himalayan orchard" />
            <div className="image-badge">
              <div className="eyebrow">Himalayan Care</div>
              <h2>Rooted in<br />the Mountains</h2>
              <p>Sustainably sourced from pristine<br />Himalayan orchards and forests.</p>
              <div className="info-chips">
                <div className="info-chip">
                  <div className="icon-wrap"><Mail size={13} color="#fff" /></div>
                  info@himalayancare.com
                </div>
                <div className="info-chip">
                  <div className="icon-wrap"><Phone size={13} color="#fff" /></div>
                  +91 6398067533
                </div>
                <div className="info-chip">
                  <div className="icon-wrap"><MapPin size={13} color="#fff" /></div>
                  Himalayan Foothills, India
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Form Panel ── */}
          <div className="contact-form-panel">
            <div className="form-inner">

              <div className="form-heading">
                <div className="label">Get in Touch</div>
                <h1>Let's <em>Connect</em><br />With Nature</h1>
                <p>Questions about our products, bulk orders, or partnerships? We'd love to hear from you.</p>
              </div>

              {submitted ? (
                <div className="success-msg">
                  <div className="check">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="field-row">
                    <div className={`field ${focused === 'name' ? 'focused' : ''}`}>
                      <label>Full Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        required
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                    <div className={`field ${focused === 'phone' ? 'focused' : ''}`}>
                      <label>Phone</label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX"
                        onFocus={() => setFocused('phone')}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                  </div>

                  <div className={`field ${focused === 'email' ? 'focused' : ''}`}>
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  <div className={`field ${focused === 'subject' ? 'focused' : ''}`}>
                    <label>Subject</label>
                    <input
                      type="text"
                      placeholder="How can we help?"
                      onFocus={() => setFocused('subject')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  <div className={`field ${focused === 'message' ? 'focused' : ''}`}>
                    <label>Message</label>
                    <textarea
                      placeholder="Tell us about your inquiry..."
                      required
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  <button type="submit" className="submit-btn">
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>
                </form>
              )}

              <div className="divider" />
              <p style={{ fontSize: 12, color: '#9aa48a', textAlign: 'center', margin: 0 }}>
                We typically respond within 24 hours · Mon–Sat, 9am–6pm IST
              </p>

            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Contact;