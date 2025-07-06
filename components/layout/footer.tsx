import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Suraj Kushwaha</h3>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer specializing in creating beautiful,
              functional, and user-centered digital experiences.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#home" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-primary transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>surajkushwaha371@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Github className="h-4 w-4" />
                <a
                  href="https://github.com/suraj371k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  suraj371k
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Linkedin className="h-4 w-4" />
                <a
                  href="https://www.linkedin.com/in/suraj-kushwaha-a696a8258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Suraj Kushwaha
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Twitter className="h-4 w-4" />
                <a
                  href="https://x.com/surajgzp371"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  surajgzp371
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Suraj Kushwaha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}