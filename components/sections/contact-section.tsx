"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you as soon as possible.",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast({
          title: "Failed to send message.",
          description: data.error || "Something went wrong.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Network error",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get In Touch
          </h2>
          <div className="mt-1 h-1 w-12 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MailIcon className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium">Email</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        surajkushwaha371@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <PhoneIcon className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium">Phone</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        +91 6307624976
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPinIcon className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium">Location</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Lucknow, India
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/suraj371k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-primary/10 transition-colors"
                  >
                    <GithubIcon className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/suraj-kushwaha-a696a8258/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-primary/10 transition-colors"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="https://x.com/surajgzp371"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-primary/10 transition-colors"
                  >
                    <TwitterIcon className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
