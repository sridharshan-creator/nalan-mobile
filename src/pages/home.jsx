import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/hero";
import About from "../components/About/about";
import Services from "../components/Services/services";
import Menu from "../components/Menu/menu";
import Gallery from "../components/Gallery/gallery";
import Testimonials from "../components/Testimonials/testimonials";
import Booking from "../components/Booking/booking";
import Contact from "../components/Contact/contact";
import Footer from "../components/Footer/footer";
import WhatsAppButton from "../components/WhatsAppButton/whatsappbutton";
function Home() {
  return (
    <>
      <Navbar />

<Hero />

<div className="travel-section">
  <About />
</div>

<div className="travel-section">
  <Services />
</div>

<div className="travel-section">
  <Menu />
</div>

<div className="travel-section">
  <Gallery />
</div>

<div className="travel-section">
  <Testimonials />
</div>

<div className="travel-section">
  <Booking />
</div>

<div className="travel-section">
  <Contact />
</div>

<Footer />

<WhatsAppButton />
    </>
  );
}

export default Home;