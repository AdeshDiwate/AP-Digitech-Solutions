import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shree Coconut App — UX Case Study",
  description:
    "A UX case study by AP Digitech Solutions: designing Shree Coconut, a hyper-local Android ordering application that streamlines the supply chain for fresh coconuts — from research and personas to a high-fidelity prototype.",
  alternates: { canonical: "/Portfolio/Shree-Coconut-App" },
  openGraph: {
    title: "Shree Coconut App — UX Case Study | AP Digitech Solutions",
    description:
      "Designing a seamless, visual-first hyper-local coconut ordering experience — research, design system, and prototype by AP Digitech Solutions.",
    url: "/Portfolio/Shree-Coconut-App",
    type: "article",
    images: [
      {
        url: "/portfolio/shree-coconut/hero.png",
        width: 1200,
        height: 630,
        alt: "Shree Coconut App — UX Case Study",
      },
    ],
  },
  twitter: {
    title: "Shree Coconut App — UX Case Study | AP Digitech Solutions",
    description:
      "Designing a seamless, visual-first hyper-local coconut ordering experience — research, design system, and prototype by AP Digitech Solutions.",
    images: ["/portfolio/shree-coconut/hero.png"],
  },
};

export default function ShreeCoconutAppLayout({ children }: { children: React.ReactNode }) {
  return children;
}
