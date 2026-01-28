'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TechIcon } from '@/components/tech-icon'
import { Badge } from '@/components/ui/badge'
import { skills, SkillCategory } from '@/data/skills'

export function SkillsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('All')
  const [isMobile, setIsMobile] = useState(false)
  const categories = Object.keys(skills) as SkillCategory[]

  // Detect mobile screen - dengan SSR check
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768)
      }
    }

    checkMobile()

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkMobile)
      return () => window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return (
    <section className="py-8 md:py-12 lg:py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-3 md:space-y-4 text-center"
        >
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            Technical Skills
          </h2>
          <p className="mx-auto max-w-[90%] sm:max-w-[80%] md:max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl">
            My expertise across various technologies and tools
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 md:mt-8 lg:mt-12"
        >
          <Tabs
            defaultValue="All"
            value={selectedCategory}
            onValueChange={(value) =>
              setSelectedCategory(value as SkillCategory)
            }
            className="w-full"
          >
            {/* Scrollable tabs for mobile */}
            <div className="relative mb-6 md:mb-8">
              <TabsList
                className={`
                  flex w-full 
                  ${isMobile ? 'overflow-x-auto justify-start' : 'flex-wrap justify-center'}
                  gap-1.5 md:gap-2 
                  ${isMobile ? 'px-4 pb-2' : 'px-0'}
                  no-scrollbar
                `}
              >
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className={`
                      whitespace-nowrap 
                      text-xs sm:text-sm md:text-base
                      px-3 sm:px-4 md:px-6
                      py-1.5 sm:py-2
                      min-w-fit
                      data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
                      transition-all
                    `}
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {isMobile && (
                <>
                  <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-background to-transparent pointer-events-none" />
                </>
              )}
            </div>

            {/* Content for each tab */}
            {categories.map((category) => (
              <TabsContent
                key={category}
                value={category}
                className="w-full focus:outline-none"
              >
                <div className="bg-muted/30 md:bg-muted/50 rounded-lg p-3 sm:p-4 md:p-6">
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
                    {skills[category].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: Math.min(index * 0.03, 0.5),
                        }}
                        className="flex-shrink-0"
                      >
                        <Badge
                          variant="outline"
                          className={`
                            bg-background hover:bg-accent transition-all
                            flex items-center gap-1.5 sm:gap-2
                            py-1.5 sm:py-2 md:py-2.5
                            px-3 sm:px-4
                            ${isMobile ? 'text-xs' : 'text-sm md:text-base'}
                            border
                            hover:scale-105
                            active:scale-95
                          `}
                        >
                          <TechIcon
                            logoKey={skill.logoKey}
                            name={skill.name}
                            className="h-4 w-4 sm:h-5 sm:w-5"
                          />
                          <span className="truncate max-w-[100px] sm:max-w-none">
                            {skill.name}
                          </span>
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Skill count indicator */}
                  <div className="text-center mt-4 md:mt-6">
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      Showing {skills[category].length} skills in {category}
                    </span>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Mobile helper text */}
        {isMobile && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-xs text-muted-foreground mt-4 px-4"
          >
            ← Scroll sideways to see more categories →
          </motion.p>
        )}
      </div>

      {/* Custom scrollbar styling */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
