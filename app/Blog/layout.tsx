import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Articles",
  description:
    "Explore the AP Digitech Solutions journal — articles, case studies, and industry insights on custom software, AI, design systems, and modern digital product strategy.",
  alternates: { canonical: "/Blog" },
  openGraph: {
    title: "Insights & Articles | AP Digitech Solutions",
    description:
      "The AP Digitech Solutions journal — perspectives on engineering, design, and AI for ambitious teams.",
    url: "/Blog",
    type: "website",
  },
  twitter: {
    title: "Insights & Articles | AP Digitech Solutions",
    description:
      "The AP Digitech Solutions journal — perspectives on engineering, design, and AI for ambitious teams.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
