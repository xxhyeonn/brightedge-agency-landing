import Sidebar from "@/components/layout/Sidebar";
import SmoothScrollLayout from "@/components/layout/SmoothScrollLayout";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <SmoothScrollLayout>
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white">
        {/* Sidebar Area - Fixed Width on Desktop */}
        <Sidebar />

        {/* Main Scrollable Content */}
        <main className="lg:ml-[80px] relative bg-[#262626] min-h-screen p-2 lg:p-4">
          <div className="w-full h-full bg-background rounded-[3rem] overflow-hidden relative shadow-2xl">
            <Hero />
            <Services />
            <Stats />
            <Projects />
            <Process />
            <Pricing />
            <Footer />
          </div>
        </main>
      </div>
    </SmoothScrollLayout>
  );
}
