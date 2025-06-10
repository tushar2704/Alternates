'use client'

import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { AlternativeCard } from '@/components/AlternativeCard'
import { SearchBar } from '@/components/SearchBar'
import { CategoryFilter } from '@/components/CategoryFilter'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { alternatives } from '@/data/alternatives'
import { categories } from '@/data/categories'

export default function BrowsePage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) {
      setSelectedCategory(category)
    }
  }, [searchParams])

  const filteredAlternatives = useMemo(() => {
    return alternatives.filter((alt) => {
      const matchesSearch = !searchQuery || 
        alt.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alt.alternativeTo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alt.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = !selectedCategory || alt.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b">
          <div className="container py-8 md:py-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Browse Open-Source Alternatives
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Explore our comprehensive collection of open-source software alternatives.
                Filter by category or search for specific solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="container py-8">
          <div className="flex flex-col space-y-6">
            <SearchBar onSearch={setSearchQuery} />
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </section>

        {/* Results */}
        <section className="container py-8">
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Showing {filteredAlternatives.length} of {alternatives.length} alternatives
              {selectedCategory && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>
          
          {filteredAlternatives.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No alternatives found. Try adjusting your search or filters.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredAlternatives.map((alternative) => (
                <AlternativeCard key={alternative.id} alternative={alternative} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}