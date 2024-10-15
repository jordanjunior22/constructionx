import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import OurValues from "@/components/OurValues";
import MoreServices from "@/components/MoreServices";
import Progress from "@/components/Progress";
import OurProjects from "@/components/OurProjects";
import Testimonials from "@/components/Testimonials";
import Faqs from "@/components/Faqs";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Services/>
      <Experience/>
      <OurValues/>
      <MoreServices/>
      <Progress/>
      <OurProjects/>
      <Testimonials/>
      <Faqs/>
      <Contact/>
      <News/>
      <Cta/>
    </div>
  );
}
