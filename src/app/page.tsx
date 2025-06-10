'use client'

import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { alternatives } from '@/data/alternatives'
import { categories } from '@/data/categories'
import { AlternativeCard } from '@/components/AlternativeCard'
import { ArrowRight, Code2, Shield, Users, Zap } from 'lucide-react'

export default function Home() {
  const featuredAlternatives = alternatives.slice(0, 6)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
          <div className="container relative z-10 py-16 md:py-24 lg:py-32">
            <div className="flex flex-col items-center text-center space-y-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in">
                Discover Open Source
                <span className="block text-primary">Alternatives</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl animate-fade-in animation-delay-200">
                Find the best open source alternatives to proprietary software. 
                Save money, gain freedom, and support the community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-400">
                <Link
                  href="/browse"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Browse Alternatives
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/submit"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Submit an Alternative
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Open Source</h3>
              <p className="text-sm text-muted-foreground">
                All alternatives are free and open source software you can trust
              </p>
            </div>
            <div className="space-y-2">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Privacy First</h3>
              <p className="text-sm text-muted-foreground">
                Take control of your data with self-hosted solutions
              </p>
            </div>
            <div className="space-y-2">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Community Driven</h3>
              <p className="text-sm text-muted-foreground">
                Curated by developers and users like you
              </p>
            </div>
            <div className="space-y-2">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Always Updated</h3>
              <p className="text-sm text-muted-foreground">
                Stay informed with the latest alternatives and updates
              </p>
            </div>
          </div>
        </section>

        {/* Featured Alternatives */}
        <section className="border-t bg-muted/30">
          <div className="container py-16">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Featured Alternatives</h2>
                  <p className="text-muted-foreground mt-1">
                    Popular open source alternatives to get you started
                  </p>
                </div>
                <Link 
                  href="/browse"
                  className="text-sm text-primary hover:underline"
                >
                  View All →
                </Link>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredAlternatives.map((alternative) => (
                  <AlternativeCard key={alternative.id} alternative={alternative} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Categories Preview */}
        <section className="container py-16">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Browse by Category</h2>
                <p className="text-muted-foreground mt-1">
                  Find alternatives in your area of interest
                </p>
              </div>
              <Link 
                href="/categories"
                className="text-sm text-primary hover:underline"
              >
                All Categories →
              </Link>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {categories.slice(0, 6).map((category) => (
                <Link
                  key={category.id}
                  href={`/browse?category=${category.id}`}
                  className="group rounded-lg border p-6 transition-colors hover:bg-accent"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{category.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.count} alternatives
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t">
          <div className="container py-16">
            <div className="rounded-lg bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Help us grow our directory by submitting your favorite open source alternatives.
                Together, we can build a comprehensive resource for the community.
              </p>
              <Link 
                href="/submit"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Submit an Alternative
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}