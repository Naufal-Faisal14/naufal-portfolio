"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type LoaderProps = {
  onComplete: () => void;
};

export default function Loader({ onComplete }: LoaderProps) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 250);
          return 100;
        }
        return prev + 1;
      });
    }, 22);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[1000] flex flex-col justify-between bg-bg p-6"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-start justify-between font-mono text-[11px] tracking-[0.2em] text-muted">
            <span>{"{ INITIALIZING }"}</span>
            <span>NAUFAL.FAISAL</span>
          </div>

          <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5">
            <span className="font-display text-[20vw] font-extrabold leading-none text-accent">
              {String(count).padStart(3, "0")}
            </span>
            <div className="h-px w-full bg-border">
              <motion.div
                className="h-px bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: `${count}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>
          </div>

          <div className="flex justify-end font-mono text-[11px] tracking-[0.2em] text-muted">
            <span>CS @ UMT LAHORE</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
