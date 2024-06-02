import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import FeaturedIn from "../components/Featured in/FeaturedIn";

function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <FeaturedIn />
      <HowItWorks />
    </>
  );
}

export default HomePage;
