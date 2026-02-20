'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/projects'
import Link from 'next/link'
import { ProjectCard } from '@/components/projects/project-card'

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

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full mt-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="w-full"
              >
                <ProjectCard project={project} />
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
