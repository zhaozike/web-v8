import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeaturesGrid";
import PricingPlans from "@/components/PricingPlans";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesGrid />
        <section id="pricing" className="py-16">
          <PricingPlans />
        </section>
        <FAQ />
        <Footer />
      </main>
    </>
  );
}

