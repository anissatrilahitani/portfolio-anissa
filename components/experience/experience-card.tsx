'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Experience } from '@/data/experience'

interface ExperienceCardProps {
  experience: Experience
  index: number // For animation staggering
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-12"
    >
      <Card className="overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-shadow">
        <CardHeader className="bg-muted/50 p-6">
          <CardTitle className="flex flex-wrap justify-between items-start gap-4">
            <div>
              <h3 className="text-2xl font-bold">{experience.title}</h3>
              <p className="text-base text-muted-foreground mt-1">
                {experience.company}
              </p>
            </div>
            <Badge variant="outline" className="shrink-0 text-sm px-3 py-1">
              {experience.startDate} - {experience.endDate}
            </Badge>
          </CardTitle>
          <div className="flex items-center text-base text-muted-foreground mt-3 gap-1">
            <MapPin className="h-5 w-5" />
            {experience.location}
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <p className="mb-5 text-base">{experience.description}</p>
          <Separator className="my-5" />
          <h4 className="font-medium mb-3 text-base">Key Achievements:</h4>
          <ul className="space-y-3">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-2">
                <ArrowRight className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-base">{achievement}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}
