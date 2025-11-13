import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Automation from "@/components/Automation";
import VideoShowcase from "@/components/VideoShowcase";
import BrandPartners from "@/components/BrandPartners";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Automation />
      <VideoShowcase />
      <BrandPartners />
      <Gallery />
      <About />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
