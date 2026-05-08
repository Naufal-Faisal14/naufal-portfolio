"use client";

import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { id: "about", label: "01. ABOUT" },
  { id: "experience", label: "02. EXPERIENCE" },
  { id: "skills", label: "03. SKILLS" },
  { id: "projects", label: "04. PROJECTS" },
  { id: "contact", label: "05. CONTACT" },
];

function scrollToSection(id: string, close?: () => void) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  close?.();
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="fixed top-0 z-[100] w-full border-b border-border/70 bg-bg/65 backdrop-blur-xl"
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <span className="font-display text-lg font-extrabold text-accent">NF</span>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <button
                key={link.id}
                className="font-mono text-[11px] tracking-[0.15em] text-muted transition-colors hover:text-text"
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            className="text-muted md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <motion.aside
        initial={false}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-[90] flex items-center justify-center overflow-x-hidden bg-bg px-5 md:hidden"
      >
        <div className="flex flex-col items-center gap-5">
          {links.map((link) => (
            <button
              key={link.id}
              className="max-w-full text-center font-display text-[clamp(2rem,11vw,3rem)] font-bold text-text"
              onClick={() => scrollToSection(link.id, () => setOpen(false))}
            >
              {link.label}
            </button>
          ))}
        </div>
      </motion.aside>
    </>
  );
}
