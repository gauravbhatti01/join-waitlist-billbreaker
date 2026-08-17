"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { User, Mail, Check, Lock, Square, CheckSquare, Zap, Users, Rocket } from "lucide-react";
import { submitToGoogleSheet } from "./actions";

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function Home() {
  const [excitement, setExcitement] = useState("hyped");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {isSubmitted ? (
          <div className={styles.successView}>
            <div className={styles.badge}>AI BILL SPLITTER V2.0</div>

            <div className={styles.successHero}>
              <img 
                src="/neon-theme.png" 
                alt="Neon Theme App Icon" 
                className={styles.animatedAppIcon}
              />
              <h2 className={styles.successTitle}>YOU'RE ALL SET!</h2>
              <p className={styles.successSubtitle}>
                Your spot is secured. Get ready to split bills smarter, faster, and stress-free.
              </p>
            </div>

            <div className={styles.successCard}>
              <div className={styles.cardIconWrapper}>
                <Mail size={24} className={styles.cardIcon} />
              </div>
              <div className={styles.cardContent}>
                <h3>CHECK YOUR EMAIL</h3>
                <p>We've sent a confirmation email with all the details.</p>
              </div>
            </div>

            <div className={styles.successCardTimeline}>
              <h3 className={styles.timelineHeader}>WHAT'S NEXT?</h3>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineIconWrapper}><Zap size={16} /></div>
                  <div className={styles.timelineContent}>
                    <h4>We're reviewing your request</h4>
                    <p>(Usually within a few minutes)</p>
                  </div>
                </div>
                <div className={styles.timelineLine}></div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineIconWrapper}><Users size={16} /></div>
                  <div className={styles.timelineContent}>
                    <h4>You'll get early access</h4>
                    <p>before anyone else</p>
                  </div>
                </div>
                <div className={styles.timelineLine}></div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineIconWrapper}><Rocket size={16} /></div>
                  <div className={styles.timelineContent}>
                    <h4>Start splitting like a pro!</h4>
                    <p>Smarter. Faster. AI-powered.</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className={styles.backButton}
              onClick={() => {
                setIsSubmitted(false);
                setName("");
                setEmail("");
              }}
            >
              Back to Home <span>→</span>
            </button>

            <div className={styles.socialProofSuccess}>
              <div className={styles.avatars}>
                <div className={styles.avatar} style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=47)' }}></div>
                <div className={styles.avatar} style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=11)' }}></div>
                <div className={styles.avatar} style={{ backgroundImage: 'url(https://i.pravatar.cc/100?img=33)' }}></div>
                <div className={styles.avatarCount}>2.8K+</div>
              </div>
              <div className={styles.socialText}>
                Join <span className={styles.highlight}>2,847</span> early splitters
              </div>
            </div>

            <div className={styles.footerSuccess}>
              <Lock size={12} className={styles.lockIcon} />
              <span>No spam, ever. Unsubscribe anytime.</span>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <div className={styles.badge}>AI BILL SPLITTER V2.0</div>

              <div className={styles.heroSection}>
                <div className={styles.heroText}>
                  <h1>SECURE<br />WAITLIST<br />ACCESS NOW</h1>
                  <p className={styles.subtitle}>
                    Split bills smoothly, settle instantly with AI. No mental  math, zero friction.
                  </p>
                </div>
                <img
                  src="/lighiting-bill.svg"
                  alt="Lightning Bolt"
                  className={styles.heroImagePlaceholder}
                />
              </div>
            </div>

            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>// YOUR NAME</label>
                <div className={styles.inputWrapper}>
                  <User className={styles.inputIcon} size={20} />
                  <input
                    type="text"
                    placeholder="Your good name"
                    className={styles.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {name.length > 0 && <Check className={styles.checkIcon} size={20} />}
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>// EMAIL ADDRESS</label>
                <div className={styles.inputWrapper}>
                  <Mail className={styles.inputIcon} size={20} />
                  <input
                    type="email"
                    placeholder="your email Id"
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {isValidEmail(email) && <Check className={styles.checkIcon} size={20} />}
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>// YOUR EXCITEMENT LEVEL</label>
                <div className={styles.excitementGrid}>
                  <button
                    type="button"
                    className={`${styles.excitementButton} ${excitement === "curious" ? styles.active : ""}`}
                    onClick={() => setExcitement("curious")}
                  >
                    {excitement === "curious" ? <CheckSquare size={16} className={styles.checkboxIconActive} /> : <Square size={16} className={styles.checkboxIcon} />} Curious
                  </button>
                  <button
                    type="button"
                    className={`${styles.excitementButton} ${excitement === "hyped" ? styles.active : ""}`}
                    onClick={() => setExcitement("hyped")}
                  >
                    {excitement === "hyped" ? <CheckSquare size={16} className={styles.checkboxIconActive} /> : <Square size={16} className={styles.checkboxIcon} />} Hyped!
                  </button>
                  <button
                    type="button"
                    className={`${styles.excitementButton} ${excitement === "fahh" ? styles.active : ""}`}
                    onClick={() => setExcitement("fahh")}
                  >
                    {excitement === "fahh" ? <CheckSquare size={16} className={styles.checkboxIconActive} /> : <Square size={16} className={styles.checkboxIcon} />} Fahh Level
                  </button>
                </div>
              </div>

              {error && <p className={styles.errorMessage} style={{ color: '#ff4444', textAlign: 'center', marginBottom: '1rem' }}>{error}</p>}
              <button
                type="button"
                className={styles.submitButton}
                disabled={isSubmitting}
                onClick={async () => {
                  if (name.length > 0 && isValidEmail(email)) {
                    setIsSubmitting(true);
                    setError("");

                    try {
                      const res = await submitToGoogleSheet({ name, email, excitement });
                      if (res.success) {
                        setIsSubmitted(true);
                      } else {
                        setError(res.error || "Something went wrong.");
                      }
                    } catch (err) {
                      setError("Network error. Please try again.");
                    } finally {
                      setIsSubmitting(false);
                    }
                  }
                }}
              >
                {isSubmitting ? "Securing..." : "Secure My Spot"} <span className={styles.arrow}>→</span>
              </button>
            </form>

          </>
        )}
      </main>
    </div>
  );
}
