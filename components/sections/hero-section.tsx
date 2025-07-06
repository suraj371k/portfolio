"use client";

import { motion } from "framer-motion";
import { ArrowDownIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function HeroSection() {
  // For the typing animation effect
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Full Stack Developer", "MERN Specialist", "UI/UX Enthusiast"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 75 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section
      id="home"
      className={cn(
        "flex min-h-screen flex-col items-center justify-center py-20 md:pt-32",
        "relative overflow-hidden"
      )}
    >
      {/* Decorative background elements */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative z-10 max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Suraj Kushwaha
            </span>
          </h1>
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl h-12">
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              {text}
              <span className="animate-blink ml-1">|</span>
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl"
          >
            I build exceptional and accessible digital experiences for the web.
            Specializing in modern JavaScript frameworks with a focus on
            performance and clean code.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#projects">View My Work</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/suraj371k"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background hover:bg-muted transition-colors"
          >
            <GithubIcon className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/suraj-kushwaha-a696a8258/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background hover:bg-muted transition-colors"
          >
            <LinkedinIcon className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
        </motion.div>
      </div>
    </section>
  );
}