"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
import { projects, Project } from "@/data/projects";
import React from "react";

export default function ProjectPage() {
  const router = useRouter();
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    // Safely access slug from params
    const slug = params?.slug?.toString() || "";
    
    const foundProject = projects.find((p) => p.id === slug);
    if (foundProject) {
      setProject(foundProject);
    } else {
      router.push("/projects");
    }
  }, [params, router]);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <div className="animate-pulse text-center">
          <p>Loading project...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                {project.title}
              </h1>

              {project.image && (
                <div className="rounded-lg overflow-hidden mb-6 relative aspect-video">
                    <Image
                        src={project.image}
                        alt={project.title}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                        priority
                    />
                </div>
              )}

              {project.gallery && project.gallery.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
                  <p className="text-muted-foreground mb-4">
                    Screenshots & fitur dari project ini.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {project.gallery.map((item, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => {
                          setGalleryIndex(index);
                          setGalleryOpen(true);
                        }}
                        className="relative aspect-video rounded-lg overflow-hidden border bg-muted hover:ring-2 hover:ring-primary/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <Image
                          src={item.src}
                          alt={item.alt ?? project.title}
                          fill
                          sizes="(max-width: 640px) 50vw, 33vw"
                          className="object-cover"
                        />
                        {item.caption && (
                          <span className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-1 px-2 text-center truncate">
                            {item.caption}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                  <Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
                    <DialogContent className="max-w-4xl p-0 gap-0 overflow-hidden">
                      <DialogHeader className="sr-only">
                        <DialogTitle>Gallery - {project.title}</DialogTitle>
                      </DialogHeader>
                      <div className="relative flex items-center justify-center min-h-[60vh] bg-muted">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={galleryIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="relative w-full aspect-video max-h-[70vh]"
                          >
                            <Image
                              src={project.gallery[galleryIndex].src}
                              alt={project.gallery[galleryIndex].alt ?? project.title}
                              fill
                              className="object-contain"
                              sizes="80vw"
                            />
                          </motion.div>
                        </AnimatePresence>
                        {project.gallery.length > 1 && (
                          <>
                            <Button
                              variant="secondary"
                              size="icon"
                              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full h-10 w-10"
                              onClick={() =>
                                setGalleryIndex((i) =>
                                  i === 0 ? project.gallery!.length - 1 : i - 1
                                )
                              }
                            >
                              <ChevronLeft className="h-5 w-5" />
                            </Button>
                            <Button
                              variant="secondary"
                              size="icon"
                              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-10 w-10"
                              onClick={() =>
                                setGalleryIndex((i) =>
                                  i === project.gallery!.length - 1 ? 0 : i + 1
                                )
                              }
                            >
                              <ChevronRight className="h-5 w-5" />
                            </Button>
                          </>
                        )}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-muted-foreground bg-background/80 px-3 py-1 rounded-full">
                          {galleryIndex + 1} / {project.gallery.length}
                        </div>
                      </div>
                      {project.gallery[galleryIndex].caption && (
                        <p className="p-4 text-center text-sm text-muted-foreground border-t">
                          {project.gallery[galleryIndex].caption}
                        </p>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              )}

              <p className="text-xl text-muted-foreground mb-8">
                {project.description}
              </p>

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="mb-6">{project.longDescription || project.description}</p>

                <h2 className="text-2xl font-bold mb-4">Achievements</h2>
                <ul className="space-y-2 mb-6">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 font-bold">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-muted rounded-lg p-6 sticky top-24"
            >
              <h2 className="text-xl font-bold mb-4">Project Details</h2>
              <Separator className="my-4" />

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">Links</h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 hover:underline"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub Repository
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 hover:underline"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}