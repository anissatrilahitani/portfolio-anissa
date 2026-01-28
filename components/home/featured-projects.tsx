'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/data/projects'
import Link from 'next/link'
import Image from 'next/image'

export function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-8 md:py-12 lg:py-24 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-[90%] sm:max-w-[80%] md:max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-4">
              Check out some of my recent work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="w-full"
              >
                <Card className="h-full flex flex-col overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg">
                  {project.image && (
                    <div className="aspect-video overflow-hidden relative bg-muted">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                        width={600}
                        height={400}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 600px"
                      />
                    </div>
                  )}
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl line-clamp-1">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 p-4 sm:p-6 pt-0">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {project.technologies
                        .slice(0, window.innerWidth < 640 ? 3 : 4)
                        .map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs px-2 py-0.5 sm:px-2.5 sm:py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      {project.technologies.length >
                        (window.innerWidth < 640 ? 3 : 4) && (
                        <Badge
                          variant="outline"
                          className="text-xs px-2 py-0.5 sm:px-2.5 sm:py-1"
                        >
                          +
                          {project.technologies.length -
                            (window.innerWidth < 640 ? 3 : 4)}
                        </Badge>
                      )}
                    </div>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                      {project.achievements
                        .slice(0, 2)
                        .map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <ArrowRight className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="line-clamp-2">{achievement}</span>
                          </li>
                        ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-4 sm:p-6 pt-0 flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <div className="flex w-full sm:w-auto gap-2 sm:gap-3">
                      <Button
                        asChild
                        variant="default"
                        size="sm"
                        className="flex-1 sm:flex-none text-xs sm:text-sm"
                      >
                        <Link href={`/projects/${project.id}`}>
                          <span className="hidden sm:inline">View Details</span>
                          <span className="sm:hidden">Details</span>
                          <ArrowRight className="ml-1.5 h-3 w-3 sm:h-4 sm:w-4" />
                        </Link>
                      </Button>

                      <div className="flex gap-1 sm:gap-2">
                        {project.github && (
                          <Button
                            asChild
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 sm:h-9 sm:w-9"
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="GitHub"
                              className="flex items-center justify-center"
                            >
                              <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button
                            asChild
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 sm:h-9 sm:w-9"
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Live Demo"
                              className="flex items-center justify-center"
                            >
                              <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <Button
            asChild
            variant="outline"
            className="mt-6 md:mt-8 text-sm sm:text-base"
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
