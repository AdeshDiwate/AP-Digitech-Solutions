import Navbar from "@/components/navbar";
import AboutUs from "@/sections/about-us";
import Hero from "@/sections/hero";
import Services from "@/sections/services";
import Testimonials from "@/sections/testimonials";
import TrustedBy from "@/sections/trusted-by";
import Footer from "@/sections/footer";
import Blogs from "@/sections/blogs";
import Contact from "@/sections/contact";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col">
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
