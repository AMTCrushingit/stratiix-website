"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AnimatedStratiixPath.module.css";

type Step = {
  number: string;
  name: string;
  description: string;
  color: string;
};

const steps: Step[] = [
  { number: "01", name: "Diagnose", description: "Establish the baseline", color: "#2563EB" },
  { number: "02", name: "Architect", description: "Design the future state", color: "#7C3AED" },
  { number: "03", name: "Activate", description: "Install the capabilities", color: "#046C5C" },
  { number: "04", name: "Accelerate", description: "Drive performance", color: "#10B981" },
  { number: "05", name: "Sustain", description: "Lock in the gains", color: "#C9A86A" },
];

export function AnimatedStratiixPath({ className = "" }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.28 }
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % steps.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [visible, paused]);

  return (
    <div
      ref={rootRef}
      className={`${styles.root} ${visible ? styles.visible : ""} ${className}`}
      onMouseLeave={() => setPaused(false)}
      aria-label="The five phases of the Stratiix Path"
    >
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.stack}>
        {steps.map((step, index) => (
          <div
            className={`${styles.row} ${active === index ? styles.active : ""}`}
            style={{
              "--step-color": step.color,
              "--step-delay": `${index * 150}ms`,
            } as React.CSSProperties}
            key={step.name}
          >
            <button
              type="button"
              className={styles.blockButton}
              onMouseEnter={() => { setPaused(true); setActive(index); }}
              onFocus={() => { setPaused(true); setActive(index); }}
              onBlur={() => setPaused(false)}
              aria-label={`${step.number} ${step.name}: ${step.description}`}
            >
              <span className={styles.block} aria-hidden="true">
                <i className={styles.topFace} />
                <i className={styles.leftFace} />
                <i className={styles.rightFace} />
              </span>
            </button>

            <span className={styles.connector} aria-hidden="true" />

            <button
              type="button"
              className={styles.label}
              onMouseEnter={() => { setPaused(true); setActive(index); }}
              onFocus={() => { setPaused(true); setActive(index); }}
              onBlur={() => setPaused(false)}
            >
              <span className={styles.labelTop}>
                <strong>{step.number}</strong>
                <b>{step.name}</b>
              </span>
              <span className={styles.description}>{step.description}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
