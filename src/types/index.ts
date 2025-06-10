export interface Alternative {
  id: string
  name: string
  description: string
  alternativeTo: string[]
  category: string
  tags: string[]
  website: string
  github?: string
  stars?: number
  forks?: number
  lastCommit?: string
  license?: string
  features: string[]
  logo?: string
}

export interface Category {
  id: string
  name: string
  description: string
  icon: string
  count: number
}

export interface SearchFilters {
  query: string
  category?: string
  tags?: string[]
  minStars?: number
  license?: string
}