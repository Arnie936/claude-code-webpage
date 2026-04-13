import { SKOOL_URL, YOUTUBE_URL, EMAIL, MAILTO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <div>
          <p className="text-lg font-bold">
            <span className="text-white">
              Arnie AI
            </span>
          </p>
          <p className="mt-1 text-sm text-zinc-200">
            © {new Date().getFullYear()} Arnold Oberleiter. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-100">
          <a href={MAILTO} className="hover:text-white">{EMAIL}</a>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            YouTube
          </a>
          <a
            href={SKOOL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Skool Community
          </a>
        </div>
      </div>
    </footer>
  );
}
