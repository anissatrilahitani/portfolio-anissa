'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { Menu, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ThemeSwitch } from '@/components/theme-switch'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'

import { CommandPalette } from '@/components/ui/command-palette'

interface NavItem {
  title: string
  href: string
}

const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Experience', href: '/experience' },
  { title: 'Projects', href: '/projects' },
  { title: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('/')
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setIsScrolled(currentScrollY > 20)
      setLastScrollY(currentScrollY)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    setActiveSection(window.location.pathname)
  }, [])

  const navbarVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: { duration: 0.15, ease: 'easeInOut' },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.04 * i, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  }

  const headerBase =
    'fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl transition-all duration-300 ease-out rounded-2xl'

  const headerScrolled =
    theme === 'dark'
      ? 'bg-background/70 backdrop-blur-xl border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_50px_-12px_rgba(0,0,0,0.4)]'
      : 'bg-background/80 backdrop-blur-xl border border-black/[0.06] shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_20px_50px_-12px_rgba(0,0,0,0.12)]'

  const headerNotScrolled =
    theme === 'dark'
      ? 'bg-background/25 backdrop-blur-lg border border-white/[0.06]'
      : 'bg-background/50 backdrop-blur-lg border border-black/[0.05]'

  return (
    <>
      <div className="sr-only">
        <CommandPalette />
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.header
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={cn(
              headerBase,
              isScrolled ? headerScrolled : headerNotScrolled,
            )}
          >
            <div className="flex items-center justify-between gap-4 px-4 py-2.5 sm:px-5 sm:py-3">
              {/* Logo / Brand */}
              <Link
                href="/"
                className="flex items-center gap-2 shrink-0 group"
                onClick={() => setActiveSection('/')}
              >
                <span
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-xl text-sm font-semibold transition-all duration-300',
                    'bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-105',
                  )}
                >
                  <Sparkles className="h-4 w-4" />
                </span>
                <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:inline variable-font">
                  Portfolio
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex flex-1 justify-center">
                <nav className="flex items-center gap-1">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      custom={i}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          'block px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 variable-font',
                          activeSection === item.href
                            ? 'text-foreground'
                            : 'text-muted-foreground hover:text-foreground',
                        )}
                        onClick={() => setActiveSection(item.href)}
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Right: Theme + Mobile menu */}
              <div className="flex items-center gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
                  className="flex items-center justify-center rounded-xl p-1 bg-muted/30"
                >
                  <ThemeSwitch />
                </motion.div>

                <Sheet>
                  <SheetTrigger asChild className="md:hidden">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 rounded-xl bg-muted/40 hover:bg-muted/60"
                    >
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="w-[min(100vw-2rem,320px)] rounded-l-2xl border-l border-border/50 bg-background/95 backdrop-blur-xl p-0"
                  >
                    <div className="flex flex-col h-full">
                      <div className="p-5 flex items-center justify-between border-b border-border/50">
                        <span className="text-sm font-semibold text-foreground">
                          Menu
                        </span>
                        <ThemeSwitch />
                      </div>
                      <nav className="flex-1 px-3 py-6">
                        <ul className="flex flex-col gap-0.5">
                          {navItems.map((item, i) => (
                            <motion.li
                              key={item.href}
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: 0.05 * i,
                                duration: 0.25,
                                ease: 'easeOut',
                              }}
                            >
                              <Link
                                href={item.href}
                                className={cn(
                                  'flex items-center gap-3 rounded-xl py-3 px-4 text-base font-medium transition-colors',
                                  activeSection === item.href
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground',
                                )}
                                onClick={() => setActiveSection(item.href)}
                              >
                                {item.title}
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  )
}
