import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Neural Style Transfer App",
    tags: ["Python", "TensorFlow", "CNN", "Flask"],
    description:
      "A web application that applies artistic styles to images using Convolutional Neural Networks and VGG-19 architecture.",
    link: "#",
    status: "Personal Project",
  },
  {
    title: "Sentiment Analysis Pipeline",
    tags: ["Python", "NLP", "Scikit-learn", "NLTK"],
    description:
      "End-to-end text classification pipeline with preprocessing, feature engineering, and model comparison across multiple algorithms.",
    link: "#",
    status: "Academic Project",
  },
  {
    title: "ML Model Dashboard",
    tags: ["Python", "Streamlit", "Pandas", "Matplotlib"],
    description:
      "Interactive dashboard for visualising model performance metrics, confusion matrices, and training curves in real-time.",
    link: "#",
    status: "Personal Project",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-5 py-24 md:py-32">
      <p className="section-label mb-8">{"{ 04 — PROJECTS }"}</p>
      <h2 className="mb-12 font-display text-4xl font-extrabold text-text md:text-6xl">
        Selected work.
      </h2>
      {/* Add your real projects here — replace title, description, tags, and link */}
      <div className="grid gap-px bg-border md:grid-cols-2">
        {projects.map((project, i) => (
          <a
            key={project.title}
            href={project.link}
            className="group relative aspect-video min-h-[280px] overflow-hidden border border-border bg-surface p-5 transition hover:-translate-y-1 hover:border-accent sm:p-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-[11px] tracking-[0.12em] text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <ArrowUpRight className="translate-x-2 -translate-y-2 opacity-0 transition group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" size={18} />
            </div>
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
              <p className="mb-3 font-mono text-[11px] tracking-[0.12em] text-muted">{project.status}</p>
              <h3 className="font-display text-2xl font-bold text-text sm:text-3xl">{project.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded border border-border px-2 py-1 font-mono text-[10px] text-muted">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-4 translate-y-2 text-sm leading-7 text-muted opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
