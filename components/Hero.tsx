import Image from "next/image";
import { SKOOL_URL, MAILTO } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
        <div>
          <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-zinc-100">
            The AI Revolution is here
          </span>
          <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight glow-text md:text-6xl">
            Scale your business with{" "}
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
              enterprise-grade AI
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-100 md:text-xl">
            I build custom automations and intelligent systems for companies
            ready to 10x their output. From LLMs and Diffusion pipelines to n8n
            workflows — engineered to ship.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Join the Premium AI Community
            </a>
            <a href={MAILTO} className="btn-secondary">
              Book a Consultation
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-neon-blue/30 via-neon-purple/20 to-transparent blur-3xl" />
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-2 backdrop-blur">
            <Image
              src="/ich1.png"
              alt="Arnold Oberleiter — Arnie AI"
              width={720}
              height={720}
              priority
              className="h-auto w-full rounded-[1.2rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
