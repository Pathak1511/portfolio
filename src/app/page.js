import About from "@/components/About";
import ContactPage from "@/components/Contact";
import Experience from "@/components/Experience";
import Main from "@/components/Main";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Project";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 px-8">
      <Navigation />
      <div className="flex-1 items-center justify-center">
        <Main />
        <Experience />
        <Projects />
        <Skills />
        <About />
        <ContactPage />
        {/* {currentPage == "/about" ? <About /> : <Main />} */}
      </div>
    </main>
  );
}
