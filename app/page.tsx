import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Community from "@/components/Community";
import GrowthVideo from "@/components/GrowthVideo";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <GrowthVideo />
      <Community />
      <Footer />
    </main>
  );
}
