'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { categories } from '@/data/categories'
import { CheckCircle } from 'lucide-react'

export default function SubmitPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    alternativeTo: '',
    description: '',
    category: '',
    website: '',
    github: '',
    features: '',
    submitterName: '',
    submitterEmail: '',
    additionalNotes: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send the data to a backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    window.scrollTo(0, 0)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="container py-12">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                  <h2 className="text-2xl font-bold">Thank You for Your Submission!</h2>
                  <p className="text-muted-foreground">
                    We've received your submission and will review it shortly. 
                    If approved, it will be added to our directory.
                  </p>
                  <div className="flex gap-4 mt-6">
                    <Button onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: '',
                        alternativeTo: '',
                        description: '',
                        category: '',
                        website: '',
                        github: '',
                        features: '',
                        submitterName: '',
                        submitterEmail: '',
                        additionalNotes: ''
                      })
                    }}>
                      Submit Another
                    </Button>
                    <Button variant="outline" onClick={() => window.location.href = '/browse'}>
                      Browse Alternatives
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b">
          <div className="container py-8 md:py-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Submit an Alternative
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Know of a great open-source alternative? Help grow our directory by submitting it below.
              </p>
            </div>
          </div>
        </section>

        {/* Submission Form */}
        <section className="container py-12">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Alternative Details</CardTitle>
              <CardDescription>
                Please provide as much information as possible about the open-source alternative.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Software Information */}
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Software Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="e.g., LibreOffice"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="alternativeTo">Alternative To *</Label>
                      <Input
                        id="alternativeTo"
                        name="alternativeTo"
                        placeholder="e.g., Microsoft Office"
                        value={formData.alternativeTo}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Provide a brief description of the software and its main features..."
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select value={formData.category} onValueChange={handleSelectChange} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.icon} {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="website">Website URL</Label>
                      <Input
                        id="website"
                        name="website"
                        type="url"
                        placeholder="https://example.com"
                        value={formData.website}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="github">GitHub Repository *</Label>
                      <Input
                        id="github"
                        name="github"
                        type="url"
                        placeholder="https://github.com/username/repo"
                        value={formData.github}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="features">Key Features</Label>
                    <Textarea
                      id="features"
                      name="features"
                      placeholder="List the main features, one per line..."
                      value={formData.features}
                      onChange={handleInputChange}
                      rows={4}
                    />
                  </div>
                </div>

                {/* Submitter Information */}
                <div className="space-y-4 border-t pt-6">
                  <h3 className="font-semibold">Your Information</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="submitterName">Your Name *</Label>
                      <Input
                        id="submitterName"
                        name="submitterName"
                        placeholder="John Doe"
                        value={formData.submitterName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="submitterEmail">Your Email *</Label>
                      <Input
                        id="submitterEmail"
                        name="submitterEmail"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.submitterEmail}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalNotes">Additional Notes</Label>
                    <Textarea
                      id="additionalNotes"
                      name="additionalNotes"
                      placeholder="Any additional information you'd like to share..."
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      rows={3}
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <Button type="button" variant="outline" onClick={() => window.location.href = '/browse'}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    Submit Alternative
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}