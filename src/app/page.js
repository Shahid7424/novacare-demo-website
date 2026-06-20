import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Benefits from "./components/Benefits";
import UseCases from "./components/UseCases";
import HowItWorks from "./components/HowItWork";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Benefits />
      <UseCases />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  );
}