// components/home/hero.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { socialLinks } from '@/data/social'

export function Hero() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const displayedSkills = ['Backend Developer']

  // Parallax effect setup - disabled on mobile
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150]) // Text moves slower
  const y2 = useTransform(scrollY, [0, 500], [0, 250]) // Image moves faster

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex(
        (prevIndex) => (prevIndex + 1) % displayedSkills.length,
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Get icon component for social links
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github className="h-4 w-4 sm:h-5 sm:w-5" />
      case 'linkedin':
        return <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
      case 'mail':
        return <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
      case 'phone':
        return <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
      default:
        return null
    }
  }

  return (
    <section className="relative py-8 md:py-12 lg:py-24 overflow-hidden">
      {/* Background elements with parallax effect - reduced on mobile */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: useTransform(scrollY, [0, 1000], [0, 300]) }}
      >
        <div className="absolute right-0 top-10 sm:top-20 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-xl sm:blur-3xl opacity-70" />
        <div className="absolute left-4 sm:left-10 bottom-10 sm:bottom-20 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/10 rounded-full blur-xl sm:blur-3xl opacity-60" />
      </motion.div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            style={{
              y:
                typeof window !== 'undefined' && window.innerWidth >= 768
                  ? y1
                  : 0,
            }}
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl lg:text-5xl xl:text-6xl/none">
                  Hi, I&apos;m
                  <br className="sm:hidden" /> Anissa Tri Lahitani
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="h-10 sm:h-12"
              >
                <div className="relative overflow-hidden h-full flex items-center">
                  {displayedSkills.map((skill, index) => (
                    <div
                      key={skill}
                      className={`absolute transition-all duration-500 transform ${
                        index === currentSkillIndex
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-8 opacity-0'
                      }`}
                    >
                      <h2 className="text-xl font-semibold text-primary sm:text-2xl lg:text-3xl">
                        {skill}
                      </h2>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-[600px] text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl"
              >
                A fresh graduate of Informatics Engineering, passionate about
                building robust and scalable backend applications. Experienced
                in Node.js, Express.js, NestJS, Golang, and Laravel, with a
                strong focus on API design and performance optimization.
              </motion.p>
            </div>

            {/* Action Buttons - Stack on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button asChild size="lg" className="group w-full sm:w-auto">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <a
                  href="/resume.pdf"
                  download="Anissa_Tri Lahitani_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links - Centered on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center sm:justify-start gap-3 pt-2"
            >
              {socialLinks.map((social) => (
                <motion.div
                  key={social.id}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="rounded-full bg-muted/50 hover:bg-primary/10 h-10 w-10 sm:h-12 sm:w-12"
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      {getIconComponent(social.icon)}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section - Order changed for mobile */}
          <motion.div
            className="flex items-center justify-center order-first lg:order-last"
            style={{
              y:
                typeof window !== 'undefined' && window.innerWidth >= 768
                  ? y2
                  : 0,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative aspect-square w-full max-w-[280px] sm:max-w-sm md:max-w-md overflow-hidden rounded-full">
              <Image
                src="/images/anissa.png"
                alt="Anissa Tri Lahitani"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 20%' }}
                priority
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 400px, 600px"
              />
              {/* Decorative border for mobile */}
              <div className="absolute inset-0 rounded-full border-4 sm:border-8 border-background/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
