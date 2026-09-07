import dynamic from "next/dynamic";
import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Capabilities from "@/components/capabilities/Capabilities";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Community from "@/components/community/Community";
import Journey from "@/components/journey/Journey";
import Exploring from "@/components/exploring/Exploring";
import Lab from "@/components/lab/Lab";
import Ideas from "@/components/ideas/Ideas";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import SectionDivider from "@/components/ui/SectionDivider";

const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), { ssr: false });

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />

      <main id="main-content">
        <Hero />

        {/* Hero → About: glowing cyan node — entrance into the identity section */}
        <SectionDivider variant="node" color="cyan" glow />

        <About />

        {/* About → Capabilities: plain line — smooth continuation */}
        <SectionDivider variant="line" color="cyan" />

        <Capabilities />

        {/* Capabilities → Projects: arrow — directional, "see the output" */}
        <SectionDivider variant="arrow" color="cyan" />

        <Projects />

        {/* Projects → Experience: node — transition from output to context */}
        <SectionDivider variant="node" color="violet" />

        <Experience />

        {/* Experience → Community: line — two "people" sections flow together */}
        <SectionDivider variant="line" color="green" />

        <Community />

        {/* Community → Journey: node — entering the narrative section */}
        <SectionDivider variant="node" color="violet" />

        <Journey />

        {/* Journey → Exploring: arrow — "this is where it leads" */}
        <SectionDivider variant="arrow" color="amber" />

        <Exploring />

        {/* Exploring → Lab: line — connected exploration spaces */}
        <SectionDivider variant="line" color="violet" />

        <Lab />

        {/* Lab → Ideas: node — transition from building to thinking */}
        <SectionDivider variant="node" color="cyan" />

        <Ideas />

        {/* Ideas → Contact: glowing cyan node — the call to action entrance */}
        <SectionDivider variant="node" color="cyan" glow />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
