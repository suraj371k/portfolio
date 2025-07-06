"use client";

import { motion } from "framer-motion";
import { FileTextIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <div className="mt-1 h-1 w-12 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Who am I?</h3>
              <p className="text-muted-foreground">
                I'm a passionate Full Stack Developer , creating web
                applications using the MERN stack (MongoDB, Express.js, React,
                Node.js). I specialize in building responsive, user-friendly
                interfaces with modern JavaScript frameworks and libraries.
              </p>
              <p className="text-muted-foreground">
                My journey in web development began during my Bachelor In
                Computer Application degree, where I discovered my passion for
                creating digital experiences. Since then, I've work so hard to
                make a great web applications that not only look good but also
                perform exceptionally well.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects.
              </p>

              <div className="pt-4">
                <Button variant="outline" className="mr-4">
                  <FileTextIcon className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="mb-2 font-semibold">Personal Info</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Name:
                      </span>
                      <span className="font-medium">Suraj Kushwaha</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Age:
                      </span>
                      <span className="font-medium">23 Years</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Location:
                      </span>
                      <span className="font-medium">India , Lucknow</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Experience:
                      </span>
                      <span className="font-medium">Fresher</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Degree:
                      </span>
                      <span className="font-medium ml-2">Bachelor In Computer Application (BCA)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="mb-2 font-semibold">Education</h4>
                  <ul className="space-y-4">
                    <li>
                      <div className="font-medium">BBDU , Lucknow</div>
                      <div className="text-sm text-muted-foreground">
                      Bachelor In Computer Application (BCA)
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
