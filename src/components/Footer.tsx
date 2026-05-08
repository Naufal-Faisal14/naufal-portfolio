export default function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8">
      <div className="mx-auto grid w-full max-w-7xl gap-3 text-center md:grid-cols-3 md:text-left">
        <div className="font-display text-lg font-extrabold text-accent">NF</div>
        <div className="font-mono text-[11px] tracking-[0.12em] text-muted md:text-center">
          © 2025 Naufal Faisal — All rights reserved
        </div>
        <div className="font-mono text-[11px] tracking-[0.12em] text-muted md:text-right">
          BUILT WITH NEXT.JS + THREE.JS
        </div>
      </div>
      <div className="mt-6 text-center">
        <button
          className="font-mono text-[11px] tracking-[0.12em] text-muted"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {"{ BACK TO TOP }"}
        </button>
      </div>
    </footer>
  );
}
