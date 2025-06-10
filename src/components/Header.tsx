'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Github, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Alternates
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/browse" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Browse
            </Link>
            <Link href="/categories" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Categories
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
              About
            </Link>
            <Link href="/submit" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Submit
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="icon" className="hidden md:flex">
            <a
              href="https://github.com/tusharaggarwal/alternates"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="/browse"
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => setIsMenuOpen(false)}
            >
              Browse
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/submit"
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => setIsMenuOpen(false)}
            >
              Submit
            </Link>
            <a
              href="https://github.com/tusharaggarwal/alternates"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60 flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}