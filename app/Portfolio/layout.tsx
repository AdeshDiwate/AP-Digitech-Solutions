import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected work from AP Digitech Solutions — custom software, AI-powered platforms, design systems, and digital products crafted for modern businesses.",
  alternates: { canonical: "/Portfolio" },
  openGraph: {
    title: "Portfolio | AP Digitech Solutions",
    description:
      "A showcase of impactful digital solutions engineered by AP Digitech Solutions, where technical excellence meets creative vision.",
    url: "/Portfolio",
    type: "website",
  },
  twitter: {
    title: "Portfolio | AP Digitech Solutions",
    description:
      "A showcase of impactful digital solutions engineered by AP Digitech Solutions.",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
