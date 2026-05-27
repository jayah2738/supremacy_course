import BackToTop from "@/components/BackToTop";
import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Levels from "@/components/Levels";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <Levels />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
