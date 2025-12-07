import Header from "@/app/components/Header";
import Banner from "@/app/components/Banner";
import Sub_Header from "@/app/components/Sub_Header";
// import ProjectsSection from "../components/ProjectsSection";
// import ContactSection from "../components/ContactSection";
import Footer from "@/app/components/Footer";
import ProjectsSection from "./components/ProjectsSection";
import Education from "./components/Education";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Sub_Header />
        <Banner />
        <About />
        <Experience />
        <ProjectsSection />
        <Education/>
        <Contact/>
        
       
      </main>
      <Footer />
    </>
  );
}
