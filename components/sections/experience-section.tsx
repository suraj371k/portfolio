"use client";

import { motion } from "framer-motion";
import { BriefcaseIcon, CalendarIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const experiences = [
  {
    title: "Frontend Web Developer",
    company: "Uzence Design Studio",
    period: "April 2025 - June 2025",
    description:
      "Created responsive, interactive user interfaces using React and modern CSS. Worked closely with designers to implement pixel-perfect layouts and intuitive user experiences.",
    achievements: [
      "Designed and implemented a custom component library using React, Tailwind CSS, and PostCSS to ensure design consistency across projects.",
      "Built a scalable design system from scratch, including typography, spacing, color tokens, and responsive layout utilities.",
      "Created reusable UI components such as buttons, modals, form fields, dropdowns, and cards, reducing development time by over 40% in future projects.",
      "Integrated the design system with Storybook for interactive documentation and easier collaboration with designers and developers.",
    ],
  },
  {
    title: "Web Developer",
    company: "Denote",
    period: "July 2025 - Ongoing",
    description:
      "Created responsive, interactive user interfaces using React and Tailwind CSS. Integrated Supabase with react and store data , also Integrate AI to make great user experience",
    achievements: [
      "Developed a full-stack web application using React and Supabase, implementing real-time data synchronization and user authentication for seamless user experience.",

      "Integrated Groq AI API to enhance application functionality with intelligent features, including automated content generation and smart user interactions.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Work Experience
          </h2>
          <div className="mt-1 h-1 w-12 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in web development, showcasing my career
            growth and key contributions.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline center line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <TimelineItem key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  experience: (typeof experiences)[number];
  index: number;
}

function TimelineItem({ experience, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn("relative flex", isEven ? "justify-end" : "justify-start")}
    >
      {/* Timeline node */}
      <div className="absolute left-1/2 top-5 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-background bg-primary" />

      {/* Content */}
      <div
        className={cn(
          "w-full md:w-[calc(50%-20px)]",
          isEven ? "md:pr-10" : "md:pl-10"
        )}
      >
        <Card
          className={cn(
            "relative overflow-hidden transition-all",
            "hover:shadow-md"
          )}
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{experience.title}</h3>
              <div className="hidden sm:flex items-center text-muted-foreground text-sm">
                <CalendarIcon className="mr-1 h-3 w-3" />
                {experience.period}
              </div>
            </div>
            <div className="flex items-center mt-1 text-muted-foreground">
              <BriefcaseIcon className="mr-1 h-3 w-3" />
              <span className="text-sm">{experience.company}</span>
            </div>
            <div className="sm:hidden mt-1 flex items-center text-muted-foreground text-sm">
              <CalendarIcon className="mr-1 h-3 w-3" />
              {experience.period}
            </div>
            <Separator className="my-3" />
            <p className="text-sm text-muted-foreground">
              {experience.description}
            </p>
            <h4 className="mt-4 font-medium text-sm">Key Achievements:</h4>
            <ul className="mt-2 space-y-1">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="text-sm flex">
                  <span className="mr-2">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
