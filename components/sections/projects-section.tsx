"use client";

import { motion } from "framer-motion";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    id: 1,
    title: "Twitter Clone",
    description: `Developed a full-featured Twitter clone using the MERN stack, implementing core functionalities like user authentication, post creation, comments, likes, and follow/unfollow. Built a responsive UI with React and Tailwind CSS, and managed real-time data updates with efficient API integration and MongoDB.`,
    image: "/images/twitter.png",
    demoLink: "https://twitter-clone-wyb4.onrender.com",
    repoLink: "https://github.com/suraj371k/twitter-clone",
    category: "fullstack",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS" , "Daisy UI"],
  },
  {
    id: 2,
    title: "Job Portal",
    description: `A modern job portal platform with role-based authentication for job seekers and employers. Users can create profiles, upload resumes, and apply for jobs, while employers can post job listings and manage applications seamlessly. The portal ensures a secure, personalized experience for each user based on their role.`,
    image: "/images/job.png",
    demoLink: "https://job-portal-delta-fawn.vercel.app",
    repoLink: "https://github.com/suraj371k/Job-Portal",
    category: "fullstack",
    technologies: ["Typescript" , "React", "Node.js", "Express", "MongoDB", "Tailwind CSS" , "Shadcn UI"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My Projects
          </h2>
          <div className="mt-1 h-1 w-12 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent web development projects, from full-stack
            applications to specialized front-end and back-end solutions.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fullstack" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((project) => project.category === "fullstack")
                .map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="frontend" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((project) => project.category === "frontend")
                .map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="backend" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((project) => project.category === "backend")
                .map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[number];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            priority={index < 3}
          />
        </div>
        <CardContent className="flex flex-col flex-grow p-6">
          <div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <Badge key={i} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between pt-4">
            <Button asChild size="sm" variant="outline">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <ExternalLinkIcon className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <GithubIcon className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
