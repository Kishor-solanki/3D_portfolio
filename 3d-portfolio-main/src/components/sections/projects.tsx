"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Github, ExternalLink, Eye, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";

const ProjectsSection = () => {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto">
      <SectionHeader id="projects" title="Projects" />
      <div className="px-4 md:px-8">
        {featured && (
          <div className="mb-10">
            <FeaturedProjectCard project={featured} />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const FeaturedProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl border border-border bg-card/80 dark:bg-black/60 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-transparent gap-1">
          <Sparkles className="w-3 h-3" /> Featured
        </Badge>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="relative group overflow-hidden">
          <div className="relative aspect-[3/2] w-full overflow-hidden">
            <Image
              src={project.src}
              alt={`${project.title} preview`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <Badge variant="secondary" className="w-fit mb-3 text-xs">
            {project.category}
          </Badge>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
            A real-time train tracking and journey intelligence platform
            providing live train status, route visualization, ETA and delay
            information, journey analytics, and weather data with interactive
            maps and geospatial context.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.skills.frontend.slice(0, 4).map((skill) => (
              <Badge
                key={skill.title}
                variant="outline"
                className="gap-1.5 text-xs font-normal"
              >
                {skill.icon}
                {skill.title}
              </Badge>
            ))}
            {project.skills.backend.slice(0, 3).map((skill) => (
              <Badge
                key={skill.title}
                variant="outline"
                className="gap-1.5 text-xs font-normal"
              >
                {skill.icon}
                {skill.title}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-border bg-card/80 dark:bg-black/60 backdrop-blur-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={project.src}
          alt={`${project.title} project thumbnail`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        <div className="absolute bottom-3 left-3 z-10">
          <Badge variant="secondary" className="text-xs bg-white/90 dark:bg-black/90 backdrop-blur">
            {project.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold tracking-tight mb-1.5 line-clamp-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {[...project.skills.frontend, ...project.skills.backend].slice(0, 5).map((skill) => (
            <Badge
              key={skill.title}
              variant="outline"
              className="gap-1 text-[10px] px-1.5 py-0 font-normal"
            >
              {skill.icon}
              {skill.title}
            </Badge>
          ))}
        </div>
        {project.features && project.features.length > 0 && (
          <ul className="mb-4 space-y-1 flex-1">
            {project.features.slice(0, 3).map((feature, i) => (
              <li
                key={i}
                className="text-xs text-muted-foreground flex items-start gap-1.5"
              >
                <span className="text-primary mt-0.5 text-[10px]">◆</span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
          <ProjectLinks project={project} />
        </div>
      </div>
    </motion.div>
  );
};

const ProjectLinks = ({ project }: { project: Project }) => {
  return (
    <>
      {project.github && (
        <Button asChild variant="outline" size="sm" className="gap-1.5">
          <Link href={project.github} target="_blank" rel="noopener">
            <Github className="w-3.5 h-3.5" />
            Code
          </Link>
        </Button>
      )}
      {project.live && project.live !== "#" && (
        <Button asChild size="sm" className="gap-1.5">
          <Link href={project.live} target="_blank" rel="noopener">
            <ExternalLink className="w-3.5 h-3.5" />
            Live
          </Link>
        </Button>
      )}
      <Modal>
        <ModalTrigger asChild>
          <Button variant="ghost" size="sm" className="gap-1.5 text-black dark:text-white">
            <Eye className="w-3.5 h-3.5" />
            Details
          </Button>
        </ModalTrigger>
        <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            {project.live !== "#" && (
              <Button asChild className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                <Link href={project.live} target="_blank">
                  Visit
                </Link>
              </Button>
            )}
          </ModalFooter>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        {project.title}
      </h4>
      <div className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible">
        <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
          <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
            Frontend
          </p>
          {project.skills.frontend?.length > 0 && (
            <FloatingDock items={project.skills.frontend} />
          )}
        </div>
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
              Backend
            </p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>
      {project.content}
    </>
  );
};