const experiences = [
  {
    role: "AI & Machine Learning Intern",
    company: "East Gate Industries",
    period: "Jul 2025 — Oct 2025",
    tags: ["Machine Learning", "Data Analysis", "Python", "Model Deployment"],
    description:
      "Developed and deployed ML models for real-world industrial applications, conducting data preprocessing, model evaluation, and performance optimization.",
  },
  {
    role: "AI & Machine Learning Intern",
    company: 'Innoverse ("Empowering Brands and Startups")',
    period: "Sep 2025 (6-Week Program)",
    tags: ["Artificial Intelligence", "ML", "Analytical Skills", "Problem Solving"],
    description:
      "Completed a 6-week intensive internship demonstrating strong analytical, technical, and problem-solving skills in real-world AI/ML applications. Certified by Internship Moderator Iqra Akhtar.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-7xl px-5 py-24 md:py-32">
      <p className="section-label mb-8">{"{ 02 — EXPERIENCE }"}</p>
      <h2 className="mb-12 font-display text-4xl font-extrabold text-text md:text-6xl">
        Where I&apos;ve worked.
      </h2>

      <div className="space-y-3">
        {experiences.map((item, idx) => (
          <article
            key={item.company}
            className="relative rounded border border-border p-6 transition hover:bg-surface"
          >
            {idx !== experiences.length - 1 && (
              <span className="absolute -bottom-4 left-[13px] h-4 w-0.5 bg-accent" />
            )}
            <span className="absolute left-[10px] top-7 h-2 w-2 rounded-full bg-accent" />
            <div className="pl-8">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <h3 className="font-display text-2xl font-bold text-text">{item.role}</h3>
                <span className="font-mono text-[11px] tracking-[0.12em] text-muted">{item.period}</span>
              </div>
              <p className="mt-1 font-mono text-xs tracking-[0.12em] text-muted">{item.company}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded border border-border px-2 py-1 font-mono text-[10px] text-muted">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
