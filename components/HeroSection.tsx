import { Button } from "@/components/ui/button";
import { ArrowDownToLine, Mail, Linkedin } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-48 bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center overflow-hidden rounded-xl shadow-2xl mb-16">
      <div className="absolute inset-0 z-0 opacity-20" style={{
        backgroundImage: "url('https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(50%) blur(2px)"
      }}></div>
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 animate-fade-in-up">
          Hi, I'm John Smith
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 animate-fade-in-up delay-200">
          A passionate and innovative developer ready to build the future.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-400">
          <Button asChild className="px-8 py-3 text-lg bg-white text-primary hover:bg-gray-100 transition-all duration-300 shadow-lg">
            <a href="/path/to/your/resume.pdf" download>
              <ArrowDownToLine className="mr-2 h-5 w-5" /> Download Resume
            </a>
          </Button>
          <Button asChild variant="outline" className="px-8 py-3 text-lg border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 shadow-lg">
            <Link href="#contact">
              <Mail className="mr-2 h-5 w-5" /> Contact Me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
