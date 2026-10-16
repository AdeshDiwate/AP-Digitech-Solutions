import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WeCare Finserv — Case Study",
  description:
    "A case study by AP Digitech Solutions: designing WeCare Finserv, a modern wealth management platform that simplifies financial tracking, budgeting, and investment goals.",
  alternates: { canonical: "/Portfolio/Fintech-App" },
  openGraph: {
    title: "WeCare Finserv — Case Study | AP Digitech Solutions",
    description:
      "Simplifying financial management, budgeting, and investment tracking — UX case study of WeCare Finserv.",
    url: "/Portfolio/Fintech-App",
    type: "article",
    images: [
      {
        url: "/portfolio/fintech/hero.png",
        width: 1200,
        height: 630,
        alt: "WeCare Finserv — Case Study",
      },
    ],
  },
  twitter: {
    title: "WeCare Finserv — Case Study | AP Digitech Solutions",
    description:
      "Simplifying financial management, budgeting, and investment tracking — UX case study of WeCare Finserv.",
    images: ["/portfolio/fintech/hero.png"],
  },
};

export default function FintechAppLayout({ children }: { children: React.ReactNode }) {
  return children;
}
