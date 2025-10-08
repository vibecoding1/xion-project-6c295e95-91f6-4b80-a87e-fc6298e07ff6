import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer"; // Assuming you have a Footer component in your Xion Stack

interface LayoutProps {
  children: ReactNode;
}

const LandingLayout = ({ children }: LayoutProps) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

const DashboardLayout = ({ children }: LayoutProps) => (
  <div className="flex">
    {/* Assuming a Sidebar component */}
    {/* <Sidebar /> */}
    <div className="flex flex-col flex-grow">
      <Navbar />
      <main className="flex-grow p-4">{children}</main>
      <Footer />
    </div>
  </div>
);

const AuthLayout = ({ children }: LayoutProps) => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    {children}
  </div>
);

const MinimalLayout = ({ children }: LayoutProps) => (
  <div className="min-h-screen bg-background">
    {children}
  </div>
);

const FullLayout = ({ children }: LayoutProps) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    {/* Assuming a Sidebar component */}
    {/* <Sidebar /> */}
    <main className="flex-grow p-4">{children}</main>
    <Footer />
  </div>
);

export const LayoutVariants = {
  Landing: LandingLayout,
  Dashboard: DashboardLayout,
  Auth: AuthLayout,
  Minimal: MinimalLayout,
  Full: FullLayout,
};
