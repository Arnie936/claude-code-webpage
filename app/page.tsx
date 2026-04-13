import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Community from "@/components/Community";
import GrowthVideo from "@/components/GrowthVideo";
import Footer from "@/components/Footer";
import ShaderBackground from "@/components/ui/shader-background";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <ShaderBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <GrowthVideo />
        <Community />
        <Footer />
      </div>
    </main>
  );
}
