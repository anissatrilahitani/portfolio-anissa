'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { experiences } from '@/data/experience'

export function ExperienceTimeline() {
  const workExperiences = experiences.filter((exp) => exp.type === 'work')

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Work Experience
          </h1>
          <p className="max-w-xl text-gray-600 dark:text-gray-300 text-lg md:text-xl">
            My professional journey in development and engineering roles
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gray-300 dark:bg-gray-700" />

          {workExperiences.map((exp, index) => {
            const isLeft = index % 2 === 0
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-20 flex flex-col md:flex-row items-center`}
              >
                {/* Timeline Dot with Icon */}
                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                  <div className="bg-primary h-6 w-6 rounded-full flex items-center justify-center shadow-md">
                    <Briefcase className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`mx-4 md:w-1/2 ${
                    isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <Card className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-md shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1 text-lg">
                        {exp.company}
                      </p>
                      <p className="mt-2 text-gray-500 dark:text-gray-400">
                        {exp.startDate} - {exp.endDate} | {exp.location}
                      </p>

                      <p className="mt-4 text-gray-700 dark:text-gray-200 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                          Key Achievements:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200">
                          {exp.achievements.map((ach, i) => (
                            <li key={i}>{ach}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
