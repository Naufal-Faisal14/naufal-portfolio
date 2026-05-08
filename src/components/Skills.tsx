"use client";

import { motion } from "framer-motion";

const aiSkills = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Keras",
  "OpenCV",
  "Jupyter",
  "NLP",
  "Computer Vision",
  "Deep Learning",
];

const csSkills = [
  "Data Structures",
  "Algorithms",
  "OOP",
  "SQL",
  "Git",
  "Linux",
  "REST APIs",
  "Docker (learning)",
  "C++",
  "Java",
];

function SkillTags({ items }: { items: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((skill, index) => (
        <motion.span
          key={skill}
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: index * 0.04, duration: 0.28 }}
          className="rounded border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted transition hover:border-accent hover:bg-[rgba(108,71,255,0.08)]"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-7xl px-5 py-24 md:py-32">
      <p className="section-label mb-8">{"{ 03 — SKILLS }"}</p>
      <h2 className="mb-12 font-display text-4xl font-extrabold text-text md:text-6xl">
        Tools & Technologies.
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="font-display text-2xl font-bold text-text">ML / AI Stack</h3>
          <SkillTags items={aiSkills} />
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold text-text">CS Fundamentals</h3>
          <SkillTags items={csSkills} />
        </div>
      </div>
    </section>
  );
}
