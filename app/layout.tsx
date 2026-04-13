import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arnie AI - Enterprise Automations & Community",
  description:
    "Arnie AI — Enterprise-grade AI automations for €4M+ revenue companies, plus a premium Skool community for DIY builders. LLMs, Diffusion, n8n, Claude Code, ComfyUI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#05060a] text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
