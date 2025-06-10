import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { categories } from '@/data/categories'
import { alternatives } from '@/data/alternatives'

export default function CategoriesPage() {
  // Calculate actual counts for each category
  const categoriesWithCounts = categories.map(category => ({
    ...category,
    count: alternatives.filter(alt => alt.category === category.id).length
  }))

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b">
          <div className="container py-8 md:py-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Software Categories
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Browse alternatives by category. Find open-source solutions for every type of software.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="container py-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categoriesWithCounts.map((category) => (
              <Link key={category.id} href={`/browse?category=${category.id}`}>
                <Card className="h-full transition-colors hover:bg-muted/50 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <span className="text-2xl">{category.icon}</span>
                        </div>
                        <div>
                          <CardTitle className="text-lg">{category.name}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">
                            {category.count} {category.count === 1 ? 'alternative' : 'alternatives'}
                          </p>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="mt-4">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t">
          <div className="container py-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Can't find a category?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground">
                Help us expand our directory by suggesting new categories or submitting alternatives.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/submit"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Submit Alternative
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}