import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected work from Raveblue — custom software, AI-powered platforms, design systems, and digital products crafted for modern businesses.",
  alternates: { canonical: "/Portfolio" },
  openGraph: {
    title: "Portfolio | Raveblue",
    description:
      "A showcase of impactful digital solutions engineered by Raveblue, where technical excellence meets creative vision.",
    url: "/Portfolio",
    type: "website",
  },
  twitter: {
    title: "Portfolio | Raveblue",
    description:
      "A showcase of impactful digital solutions engineered by Raveblue.",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
