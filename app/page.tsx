import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import AboutUs from "@/sections/about-us";
import Hero from "@/sections/hero";
import Services from "@/sections/services";
import Testimonials from "@/sections/testimonials";
import TrustedBy from "@/sections/trusted-by";
import Footer from "@/sections/footer";
import Blogs from "@/sections/blogs";
import Contact from "@/sections/contact";

export const metadata: Metadata = {
  title: "AP Digitech Solutions | Custom Software & Digital Solutions",
  description:
    "AP Digitech Solutions is a custom software and digital solutions studio. We craft modern websites, scalable software systems, AI-powered products, and high-impact digital experiences for ambitious businesses.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AP Digitech Solutions | Custom Software & Digital Solutions",
    description:
      "Modern websites, scalable software systems, and AI-powered products engineered for ambitious businesses.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <AboutUs />
      <TrustedBy />
      <Services />
      <Testimonials />
      <Blogs />
      <Contact />
      <Footer />
    </main>
  );
}
