import Link from "next/link";
import { Linkedin, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-8 bg-background text-textSecondary border-t border-border">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} John Smith. All rights reserved.</p>
        <div className="flex space-x-6">
          <Link href="https://www.linkedin.com/in/johnsmith" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary transition-colors duration-300">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="https://github.com/johnsmith" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary transition-colors duration-300">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://twitter.com/johnsmith" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary transition-colors duration-300">
            <Twitter className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
