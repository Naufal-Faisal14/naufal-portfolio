"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-5 py-24 md:py-32" ref={ref}>
      <p className="section-label mb-8">{"{ 01 — ABOUT }"}</p>
      <div className="grid items-start gap-10 md:grid-cols-[3fr_2fr]">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-tight text-text md:text-[52px]">
            Building intelligent systems, one model at a time.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
            I&apos;m Naufal Faisal, a Computer Science student at the University of Management and
            Technology, Lahore (graduating 2027), specializing in Machine Learning and Artificial
            Intelligence. I&apos;m passionate about turning data into decisions and building systems
            that learn, adapt, and create real-world impact.
          </p>
          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-accent px-4 py-2 font-mono text-[11px] tracking-[0.15em] text-accent">
            <span className="pulse-dot">●</span>
            OPEN TO OPPORTUNITIES
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="order-1 space-y-4 md:order-2"
        >
          <div className="aspect-[3/4] border border-border bg-surface p-5">
            {/* Replace with <Image> from next/image once you have a photo */}
            <div className="flex h-full items-center justify-center font-mono text-xs tracking-[0.2em] text-muted">
              {"{ PHOTO }"}
            </div>
          </div>
          <div className="flex gap-3">
            <div className="rounded border border-border bg-surface px-3 py-2 text-xs text-muted">
              2 Internships Completed
            </div>
            <div className="rounded border border-border bg-surface px-3 py-2 text-xs text-muted">
              CS @ UMT · 2027
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
