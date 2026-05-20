import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MAA Recipe App — UX Case Study",
  description:
    "A UX case study by Raveblue: designing a hands-free, multilingual cooking experience for modern home cooks — from research and personas to a high-fidelity prototype.",
  alternates: { canonical: "/Portfolio/MAA-Recipe-App" },
  openGraph: {
    title: "MAA Recipe App — UX Case Study | Raveblue",
    description:
      "Designing a seamless, voice-driven cooking experience — research, design system, and prototype by Raveblue.",
    url: "/Portfolio/MAA-Recipe-App",
    type: "article",
    images: [
      {
        url: "/portfolio/maa-recipe/hero.png",
        width: 1200,
        height: 630,
        alt: "MAA Recipe App — UX Case Study",
      },
    ],
  },
  twitter: {
    title: "MAA Recipe App — UX Case Study | Raveblue",
    description:
      "Designing a seamless, voice-driven cooking experience — research, design system, and prototype by Raveblue.",
    images: ["/portfolio/maa-recipe/hero.png"],
  },
};

export default function MAARecipeAppLayout({ children }: { children: React.ReactNode }) {
  return children;
}
