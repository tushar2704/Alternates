'use client'

import { Category } from '@/types'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CategoryFilterProps {
  categories: Category[]
  selectedCategory: string | null
  onSelectCategory: (categoryId: string | null) => void
}

export function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        size="sm"
        onClick={() => onSelectCategory(null)}
        className="transition-all"
      >
        All Categories
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          size="sm"
          onClick={() => onSelectCategory(category.id)}
          className="transition-all"
        >
          <span className="mr-2">{category.icon}</span>
          {category.name}
          <span className="ml-2 text-xs opacity-70">({category.count})</span>
        </Button>
      ))}
    </div>
  )
}