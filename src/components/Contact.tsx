export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-5 py-24 md:py-32">
      <p className="section-label mb-8">{"{ 05 — CONTACT }"}</p>
      <h2 className="font-display text-[clamp(48px,8vw,96px)] font-extrabold leading-[0.9] text-text">
        Let&apos;s build
        <br />
        something
        <br />
        intelligent.
      </h2>
      <p className="mt-6 max-w-xl text-base text-muted">
        Open to internships, collaborations, and full-time roles starting 2027.
      </p>

      <a
        href="mailto:naufal@example.com"
        className="group relative mt-10 inline-block pb-1 font-display text-3xl font-bold text-text"
      >
        naufal@example.com
        <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
      </a>

      <div className="mt-8 flex flex-wrap gap-6 font-mono text-xs tracking-[0.12em] text-muted">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          GITHUB ↗
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          LINKEDIN ↗
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          INSTAGRAM ↗
        </a>
      </div>
    </section>
  );
}
