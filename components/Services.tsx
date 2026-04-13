export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
            What I do
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Two ways to work with me
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 backdrop-blur transition hover:border-neon-blue/40 md:p-10">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-neon-blue/20 blur-3xl transition group-hover:bg-neon-blue/30" />
            <div className="relative">
              <h3 className="text-2xl font-bold md:text-3xl">
                Enterprise AI & Automation
              </h3>
              <p className="mt-2 text-sm uppercase tracking-wider text-cyan-300">
                For companies with €4 million+ revenue
              </p>
              <p className="mt-6 text-zinc-100">
                Custom-built AI systems and automations for operators who need
                results, not prototypes. I work directly with founders and
                leadership to identify the highest-ROI workflows and ship them
                end-to-end.
              </p>
              <ul className="mt-6 space-y-2 text-zinc-100">
                <li>• Internal agents & knowledge systems</li>
                <li>• Pipeline automation with n8n</li>
                <li>• Production-grade LLM integrations</li>
              </ul>
            </div>
          </article>

          <article id="workshops" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 backdrop-blur transition hover:border-neon-purple/40 md:p-10">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-neon-purple/20 blur-3xl transition group-hover:bg-neon-purple/30" />
            <div className="relative">
              <h3 className="text-2xl font-bold md:text-3xl">
                Workshops & Training
              </h3>
              <p className="mt-2 text-sm uppercase tracking-wider text-amber-300">
                Hands-on, production-first
              </p>
              <p className="mt-6 text-zinc-100">
                Level up your team or learn as a builder. Covering LLMs,
                Diffusion models, n8n, Claude Code, and ComfyUI — every module
                is built around real deliverables, not slides.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {["LLMs", "Diffusion", "n8n", "Claude Code", "ComfyUI"].map(
                  (t) => (
                    <li
                      key={t}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-zinc-200"
                    >
                      {t}
                    </li>
                  )
                )}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
