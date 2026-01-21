import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/landingPage/hero/Hero";
import Features from "../components/landingPage/features/Features";
import Preview from "../components/landingPage/preview/Preview";
import HowItWorks from "../components/landingPage/how-it-works/HowItWorks";
import Testimonial from "../components/landingPage/testimonial/Testimonial";
import FinalCTA from "../components/landingPage/finalCTA/FinalCTA";
import Footer from "../components/landingPage/footer/Footer";

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar/>
      <main className="pt-20 tny:pt-24">
        <Hero />
        <Preview/>
        <Features/>
        <HowItWorks />
        <Testimonial />
        <FinalCTA />
        <Footer/>
      </main>
    </div>
  );
}
