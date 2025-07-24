import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import BookingForm from "@/components/BookingForm";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import VirtualAssistant from "@/components/VirtualAssistant";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <BookingForm />
      <Testimonials />
      <Contact />
      <Footer />
      <VirtualAssistant />
    </div>
  );
};

export default Index;
