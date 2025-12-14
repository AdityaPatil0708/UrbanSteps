import Navbar from "../components/Navbar.jsx";
import ShoesWomen from "../components/ShoesWomen.jsx";
import Footer from "../components/Footer.jsx";


function Women() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <main>
        <ShoesWomen/>
      </main>
      <Footer />
    </div>
  );
}

export default Women;