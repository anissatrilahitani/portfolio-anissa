'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import { experiences } from '@/data/experience'

const easeSmooth = [0.22, 1, 0.36, 1] as const
const springSoft = { type: 'spring' as const, stiffness: 400, damping: 30 }
const springBounce = { type: 'spring' as const, stiffness: 500, damping: 25 }

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: easeSmooth,
    },
  }),
}

const lineVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easeSmooth,
      delay: 0.2,
    },
  },
}

const stepVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.15 + i * 0.12,
      ...springBounce,
    },
  }),
}

const cardVariants = (isLeft: boolean) => ({
  hidden: {
    opacity: 0,
    x: isLeft ? -36 : 36,
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.08 + i * 0.12,
      ease: easeSmooth,
    },
  }),
})

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0 },
}

export function ExperienceTimeline() {
  const workExperiences = experiences.filter((exp) => exp.type === 'work')

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--muted)_0%,var(--background)_50%)] dark:bg-[linear-gradient(to_bottom,oklch(0.18_0.02_265)_0%,var(--background)_50%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.25]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
        aria-hidden
      />

      <div className="container relative px-4 py-12 md:py-20 md:px-6 mx-auto">
        {/* Hero - staggered */}
        <motion.header
          initial="hidden"
          animate="visible"
          className="text-center max-w-2xl mx-auto mb-16 md:mb-24"
        >
          <motion.p
            variants={heroVariants}
            custom={0}
            className="text-sm font-medium tracking-widest uppercase text-primary mb-3"
          >
            Career
          </motion.p>
          <motion.h1
            variants={heroVariants}
            custom={1}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4"
          >
            Work Experience
          </motion.h1>
          <motion.p
            variants={heroVariants}
            custom={2}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Perjalanan profesional dalam pengembangan perangkat lunak dan rekayasa sistem.
          </motion.p>
        </motion.header>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line - animate draw */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-px md:-translate-x-1/2 bg-linear-to-b from-primary/30 via-primary/50 to-transparent origin-top"
            aria-hidden
          />

          <ul className="space-y-12 md:space-y-16">
            {workExperiences.map((exp, index) => {
              const isLeft = index % 2 === 0
              const step = String(index + 1).padStart(2, '0')

              return (
                <li
                  key={exp.id}
                  className="relative flex flex-col md:flex-row md:items-center gap-8 md:gap-0"
                >
                  {/* Step number - pop in with spring */}
                  <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center">
                    <motion.div
                      variants={stepVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-40px' }}
                      custom={index}
                      whileHover={{ scale: 1.08 }}
                      transition={springSoft}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg ring-4 ring-background dark:ring-background"
                    >
                      {step}
                    </motion.div>
                  </div>

                  {/* Spacer for step on mobile */}
                  <div className="w-12 shrink-0 md:hidden" aria-hidden />

                  {/* Card - slide from side */}
                  <div
                    className={`flex-1 min-w-0 ${
                      isLeft
                        ? 'md:pr-12 md:text-right'
                        : 'md:pl-12 md:order-last md:text-left'
                    }`}
                  >
                    <motion.article
                      variants={cardVariants(isLeft)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-60px' }}
                      custom={index}
                      whileHover={{
                        y: -6,
                        transition: springSoft,
                      }}
                      className="group relative rounded-2xl border border-border/80 bg-card/95 dark:bg-card/90 backdrop-blur-sm p-6 md:p-8 shadow-lg shadow-black/5 dark:shadow-black/20 hover:shadow-xl hover:border-primary/20"
                    >
                      <div
                        className={`flex flex-col gap-4 ${isLeft ? 'md:items-end' : 'md:items-start'}`}
                      >
                        <div>
                          <h2 className="text-xl md:text-2xl font-bold text-foreground">
                            {exp.title}
                          </h2>
                          <p className="mt-1 text-base font-medium text-muted-foreground">
                            {exp.company}
                          </p>
                        </div>

                        <div
                          className={`flex flex-wrap items-center gap-3 text-sm text-muted-foreground ${
                            isLeft ? 'md:justify-end' : ''
                          }`}
                        >
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 font-medium">
                            <Calendar className="h-3.5 w-3.5" />
                            {exp.startDate} – {exp.endDate}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 shrink-0" />
                            {exp.location}
                          </span>
                        </div>

                        <p className="text-muted-foreground leading-relaxed max-w-none">
                          {exp.description}
                        </p>

                        <div
                          className={`mt-2 space-y-3 ${isLeft ? 'md:items-end' : ''}`}
                        >
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                            Key achievements
                          </h3>
                          <motion.ul
                            variants={listVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-20px' }}
                            className={`space-y-2.5 ${isLeft ? 'md:flex md:flex-col md:items-end' : ''}`}
                          >
                            {exp.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                variants={itemVariants}
                                className="flex items-start gap-3 text-sm text-muted-foreground"
                              >
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                                <span className="leading-relaxed">{achievement}</span>
                              </motion.li>
                            ))}
                          </motion.ul>
                        </div>
                      </div>
                    </motion.article>
                  </div>

                  {/* Empty column on the other side for layout balance */}
                  <div className="hidden md:block flex-1 min-w-0" aria-hidden />
                </li>
              )
            })}
          </ul>
        </div>

        {/* Bottom accent */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: easeSmooth, delay: 0.15 }}
          className="mt-20 text-center text-sm text-muted-foreground"
        >
          Open to new opportunities and collaborations.
        </motion.p>
      </div>
    </section>
  )
}
