
import Hero from "./components/Hero";
import Section from "./components/Section";
import About from "./components/About";
import Footer from "./components/Footer";
import Transition from "./components/Transition";

export default function Home() {
  return (
    <div className="max-w-7xl w-full px-4 md:px-8 mx-auto ">
    <Hero/>
    <Transition/>
    <Section/>
    <About/>
    <Footer/>
    </div>
  );
}
