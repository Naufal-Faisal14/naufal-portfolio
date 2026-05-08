"use client";

import { useEffect, useState } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useSmoothScroll();

  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "cursor";
    document.body.appendChild(cursor);

    const move = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeChild(cursor);
    };
  }, []);

  return (
    <>
      <Loader onComplete={() => setLoaded(true)} />
      {loaded && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
