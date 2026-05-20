import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Articles",
  description:
    "Explore the Raveblue journal — articles, case studies, and industry insights on custom software, AI, design systems, and modern digital product strategy.",
  alternates: { canonical: "/Blog" },
  openGraph: {
    title: "Insights & Articles | Raveblue",
    description:
      "The Raveblue journal — perspectives on engineering, design, and AI for ambitious teams.",
    url: "/Blog",
    type: "website",
  },
  twitter: {
    title: "Insights & Articles | Raveblue",
    description:
      "The Raveblue journal — perspectives on engineering, design, and AI for ambitious teams.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
