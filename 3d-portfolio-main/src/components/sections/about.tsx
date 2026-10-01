"use client";

import { motion } from "framer-motion";
import { config } from "@/data/config";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AboutSection = () => {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center min-h-screen py-20 z-10">
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="about"
          title="About"
          desc="Get to know me."
          className="mb-12 md:mb-20 mt-0"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-card text-card-foreground border-border hover:border-primary/20 transition-colors duration-300 shadow-sm hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-bold tracking-tight">
                Hi, I&apos;m {config.author}
              </CardTitle>
              <CardDescription>
                Final-year Electronics and Communication Engineering
                undergraduate and frontend developer, based in{" "}
                {config.location}.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                Final-year Electronics and Communication Engineering
                undergraduate with strong frontend development experience in
                React.js, Next.js, TypeScript, and Tailwind CSS, focused on
                building responsive, interactive user interfaces and integrating
                REST APIs on the client side. I&apos;ve built three
                production-style applications covering component architecture,
                UI performance optimization, and third-party API integration,
                and I&apos;m seeking an Associate Frontend Developer role to grow
                as a frontend engineer.
              </p>

              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <span className="flex gap-2">
                  <span className="text-muted-foreground w-20">Location</span>
                  <span>{config.location}</span>
                </span>
                <span className="flex gap-2">
                  <span className="text-muted-foreground w-20">Phone</span>
                  <span>{config.phone}</span>
                </span>
                <span className="flex gap-2">
                  <span className="text-muted-foreground w-20">Email</span>
                  <span>
                    <a
                      href={`mailto:${config.email}`}
                      className="underline-offset-4 hover:underline"
                    >
                      {config.email}
                    </a>
                  </span>
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;