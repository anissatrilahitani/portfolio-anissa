'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Code } from 'lucide-react'

interface TechIconProps {
  logoKey: string
  name: string
  className?: string
}

export function TechIcon({
  logoKey,
  name,
  className = 'h-5 w-5',
}: TechIconProps) {
  const [imageError, setImageError] = useState(false)
  const [useFallback, setUseFallback] = useState(false)

  // Try several icon variations in case some don't exist
  const getIconUrl = () => {
    if (logoKey === 'nextjs')
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
    if (logoKey === 'tailwindcss')
      return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logoKey}/${logoKey}-original.svg`
  }

  const getFallbackUrl = () => {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logoKey}/${logoKey}-plain.svg`
  }

  const src = useFallback ? getFallbackUrl() : getIconUrl()

  const handleError = () => {
    if (!useFallback) {
      setUseFallback(true)
    } else {
      setImageError(true)
    }
  }

  if (imageError) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-primary/10 text-primary rounded`}
      >
        <Code className="h-3 w-3" />
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={`${name} logo`}
      width={20}
      height={20}
      className={`${className} object-contain`}
      onError={handleError}
      unoptimized
    />
  )
}
