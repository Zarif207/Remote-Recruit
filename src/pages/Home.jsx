import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import CTA from "../components/CTA/CTA";
import FAQ from "../components/FAQ/FAQ";
import Pricing from "../components/Pricing/Pricing";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureSection />
      <CTA />
      <FAQ />
      <Pricing />
      <Footer />
    </>
  );
};

export default Home;