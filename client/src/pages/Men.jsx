import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ShoesMen from "../components/ShoesMen.jsx";

function Men() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <main>
        <ShoesMen/>
      </main>
      <Footer />
    </div>
  );
}

export default Men;