"use client";

import { motion } from "framer-motion";
import { EDUCATION } from "@/data/constants";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const EducationSection = () => {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center min-h-[100vh] py-20 z-10">
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="education"
          title="Education"
          desc="My academic background."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="flex flex-col gap-8">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="bg-card text-card-foreground border-border hover:border-primary/20 transition-colors duration-300 shadow-sm hover:shadow-md">
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-1">
                      <CardTitle className="text-xl font-bold tracking-tight">
                        {edu.degree}
                      </CardTitle>
                      <div className="text-base font-medium text-muted-foreground">
                        {edu.institution}
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="w-fit font-mono text-xs font-normal"
                    >
                      {edu.startDate} - {edu.endDate}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="text-xs font-normal border-transparent bg-secondary/30"
                    >
                      {edu.grade}
                    </Badge>
                  </div>
                  {edu.coursework && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span className="font-medium">Relevant Coursework:</span>{" "}
                      {edu.coursework}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EducationSection;