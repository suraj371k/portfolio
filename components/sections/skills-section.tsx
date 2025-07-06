"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const technicalSkills = [
  { name: "JavaScript/TypeScript", level: 95 },
  { name: "React.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "Express.js", level: 85 },
  { name: "Next.js", level: 85 },
  { name: "HTML/CSS", level: 90 },
  { name: "Tailwind CSS", level: 85 },
];

const devTools = [
  "Git & GitHub",
  "VS Code",
  "Jest",
  "Figma",
  "Postman",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My Skills
          </h2>
          <div className="mt-1 h-1 w-12 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            As a Full Stack Developer specializing in MERN stack, I've developed
            expertise in various technologies and tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {technicalSkills.map((skill, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">
                  Development Tools
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {devTools.map((tool, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className={cn(
                        "flex items-center justify-center p-3 rounded-md",
                        "bg-primary/10 hover:bg-primary/20 transition-colors duration-200"
                      )}
                    >
                      <span className="text-sm font-medium">{tool}</span>
                    </motion.div>
                  ))}
                </div>

                <h3 className="text-xl font-semibold my-6">Additional Skills</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>RESTful API Design</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>GraphQL</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Responsive Web Design</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>UI/UX Design Principles</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Authentication & Authorization</span>
                  </li>

                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}