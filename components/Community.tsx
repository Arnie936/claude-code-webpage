import Image from "next/image";
import { SKOOL_URL } from "@/lib/constants";

export default function Community() {
  return (
    <section id="community" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-streaks opacity-60" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-neon-purple/20 to-transparent blur-3xl" />
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-2 backdrop-blur">
            <Image
              src="/ich2.png"
              alt="Arnie with the community"
              width={720}
              height={720}
              className="h-auto w-full rounded-[1.2rem] object-cover"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <p className="text-sm uppercase tracking-[0.25em] text-neon-purple">
            The Skool Community
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Built for DIY AI operators
          </h2>
          <p className="mt-6 text-lg text-zinc-300">
            Join a focused community of builders shipping real AI products.
            Weekly deep-dives, direct support from me, live build sessions, and
            a network that actually ships. Learn n8n, Claude Code, ComfyUI, and
            production LLM patterns — alongside people doing the same.
          </p>
          <ul className="mt-6 space-y-2 text-zinc-300">
            <li>• Direct support &amp; feedback from Arnie</li>
            <li>• Step-by-step playbooks and templates</li>
            <li>• Live workshops every week</li>
          </ul>
          <div className="mt-10">
            <a
              href={SKOOL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Join the Skool Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
