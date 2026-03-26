import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import InstructorsSection from "./components/InstructorsSection/InstructorsSection";
import CoursesCTA from "./components/CoursesCTA/CoursesCTA";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container-bg">
        <Navbar />
        <HeroSection />
      </div>
      <FeaturesSection />
      <InstructorsSection />
      <div className="container-bg">
        <CoursesCTA />
      </div>
      <Footer />
    </div>
  );
}

export default App;
