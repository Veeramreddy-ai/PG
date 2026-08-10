import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Amenities from "../components/Amenities/Amenities";
import Rooms from "../components/Rooms/Rooms";
import Food from "../components/Food/Food";
import Gallery from "../components/Gallery/Gallery";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import PreBooking from "../components/PreBooking/PreBooking";


const Home = () => {
  return (
    <>

    <Navbar />

      <Hero />
      <About />
      <Amenities />
      <Rooms />
      <Food />
      <Gallery />
      <Testimonials />
      <PreBooking />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
