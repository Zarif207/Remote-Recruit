import Navbar          from "../components/Navbar/Navbar";
import Hero            from "../components/Hero/Hero";
import FeatureSection  from "../components/FeatureSection/FeatureSection";
import FeatureFee      from "../components/FeatureSection/FeatureFee";
import FeatureShowcase from "../components/FeatureSection/FeatureShowcase";
import CTA             from "../components/CTA/CTA";
import FAQ             from "../components/FAQ/FAQ";
import Pricing         from "../components/Pricing/Pricing";
import Footer          from "../components/Footer/Footer";

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <FeatureSection />
    <FeatureFee />
    <FeatureShowcase />
    <CTA />
    <FAQ />
    <Pricing />
    <Footer />
  </>
);

export default Home;
