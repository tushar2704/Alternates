import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Github, Linkedin, Heart, Users, Code, Shield } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b">
          <div className="container py-8 md:py-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Alternates
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Empowering developers and businesses to discover open-source alternatives
                to proprietary software solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container py-12">
          <div className="mx-auto max-w-4xl space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Alternates is a curated directory of open-source alternatives to popular proprietary software. 
                We believe in the power of open-source software to democratize technology, foster innovation, 
                and provide freedom of choice to users worldwide.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Why Open Source?</h2>
              <div className="grid gap-6 md:grid-cols-2 mt-6">
                <Card>
                  <CardContent className="p-6">
                    <Shield className="h-8 w-8 mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">Privacy & Security</h3>
                    <p className="text-sm text-muted-foreground">
                      Open-source software allows you to inspect the code, ensuring no hidden tracking or malicious behavior.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Code className="h-8 w-8 mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">Customization</h3>
                    <p className="text-sm text-muted-foreground">
                      Modify and adapt the software to your specific needs without vendor restrictions.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Users className="h-8 w-8 mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">Community</h3>
                    <p className="text-sm text-muted-foreground">
                      Join vibrant communities of developers and users who contribute and support each other.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Heart className="h-8 w-8 mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">Cost-Effective</h3>
                    <p className="text-sm text-muted-foreground">
                      Save on licensing fees while getting enterprise-grade software solutions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Creator Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Meet the Creator</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white text-4xl font-bold">
                      TA
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-bold mb-2">Tushar Aggarwal</h3>
                      <p className="text-muted-foreground mb-4">
                        Software Developer & Open Source Enthusiast
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        Passionate about building tools that help developers and businesses make informed decisions 
                        about their software stack. I believe in the transformative power of open-source software 
                        and its ability to create a more equitable digital future.
                      </p>
                      <div className="flex gap-4 justify-center md:justify-start">
                        <a
                          href="https://www.linkedin.com/in/tusharaggarwalinseec/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                        </a>
                        <a
                          href="https://github.com/tusharaggarwal"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contribute Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4">Contribute to Alternates</h2>
              <p className="text-muted-foreground mb-6">
                Alternates is an open-source project, and we welcome contributions from the community. 
                Whether you want to submit a new alternative, improve our codebase, or suggest features, 
                your input is valuable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/submit"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Submit an Alternative
                </Link>
                <a
                  href="https://github.com/tusharaggarwal/alternates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}