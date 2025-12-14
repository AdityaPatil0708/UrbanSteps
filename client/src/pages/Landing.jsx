import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";
import Hero2 from "../components/Hero2.jsx";

function Landing() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <main>
        <Hero />
        <Hero2 />
      </main>
      <Footer />
    </div>
  );
}

export default Landing;