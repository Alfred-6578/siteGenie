import Image from "next/image";
import Navbar from "./(routes)/components/Navbar";
import Hero from "./(routes)/components/Hero/Hero";
import Features from "./(routes)/components/Features/Features";
import Preview from "./(routes)/components/Preview/Preview";
import HowItWorks from "./(routes)/components/How-it-works/HowItWorks";
import Testimonial from "./(routes)/components/Testimonial/Testimonial";
import FinalCTA from "./(routes)/components/FinalCTA/FinalCTA";
import Footer from "./(routes)/components/Footer/Footer";

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
