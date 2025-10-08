import { LayoutVariants } from "@/components/layout-variants";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <LayoutVariants.Landing>
      <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 lg:p-16">
        <HeroSection />
        <ExperienceSection />
        <ContactForm />
      </main>
      <Footer />
    </LayoutVariants.Landing>
  );
}
