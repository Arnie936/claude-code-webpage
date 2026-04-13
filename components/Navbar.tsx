import Link from "next/link";
import { SKOOL_URL, YOUTUBE_URL } from "@/lib/constants";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
            Arnie AI
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-zinc-100 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#services" className="hover:text-white">Workshops</a>
          <a href="#community" className="hover:text-white">Community</a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={YOUTUBE_URL}
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 p-2 text-zinc-100 transition hover:border-white/30 hover:text-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
            </svg>
          </a>
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10 sm:inline-flex"
          >
            Join Community
          </a>
        </div>
      </nav>
    </header>
  );
}
