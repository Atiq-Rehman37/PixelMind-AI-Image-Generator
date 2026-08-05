import Hero from "../components/Hero";
import Showcase from "../components/Showcase";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-violet-50 to-indigo-100">
      <Hero />
      <Showcase />
      <Features />
      <HowItWorks />
      <CTA />
    </div>
  );
};

export default Home;