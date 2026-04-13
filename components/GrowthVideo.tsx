"use client";

import { motion } from "framer-motion";
import { CONSULT_MAILTO } from "@/lib/constants";

export default function GrowthVideo() {
  return (
    <section id="growth" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 items-center gap-12 md:grid-cols-2"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              Growth &amp; ROI
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              AI that moves the line up and to the right
            </h2>
            <p className="mt-6 text-lg text-zinc-100">
              The best automations don't just cut cost — they compound. Every
              workflow I ship is designed to scale headcount-free, unlock new
              revenue, and free your team for the work that matters.
            </p>
            <div className="mt-10">
              <a href={CONSULT_MAILTO} className="btn-primary">
                Schedule Your Initial Consultation
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-neon-blue/30 to-neon-purple/20 blur-3xl" />
            <div
              className="overflow-hidden rounded-2xl border border-white/10 bg-black"
              suppressHydrationWarning
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                suppressHydrationWarning
                className="h-full w-full object-cover"
              >
                <source src="/video-stock-animation.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
