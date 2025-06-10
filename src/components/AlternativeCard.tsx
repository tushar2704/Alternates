'use client'

import { Alternative } from '@/types'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Star, GitFork, Clock } from 'lucide-react'
import { formatNumber, formatDate } from '@/lib/utils'

interface AlternativeCardProps {
  alternative: Alternative
}

export function AlternativeCard({ alternative }: AlternativeCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl">{alternative.name}</CardTitle>
          <Badge variant="outline" className="ml-2">
            {alternative.category}
          </Badge>
        </div>
        <CardDescription className="mt-2">
          {alternative.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1">
        <div className="space-y-4">
          {/* Alternative To */}
          <div>
            <p className="text-sm font-medium mb-1">Alternative to:</p>
            <div className="flex flex-wrap gap-1">
              {alternative.alternativeTo.map((item) => (
                <Badge key={item} variant="secondary" className="text-xs">
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <p className="text-sm font-medium mb-1">Key Features:</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              {alternative.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* GitHub Stats */}
          {alternative.github && (
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                <span>{formatNumber(alternative.stars || 0)}</span>
              </div>
              <div className="flex items-center gap-1">
                <GitFork className="h-4 w-4" />
                <span>{formatNumber(alternative.forks || 0)}</span>
              </div>
              {alternative.lastCommit && (
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{formatDate(alternative.lastCommit)}</span>
                </div>
              )}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {alternative.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="gap-2">
        <Button asChild size="sm" className="flex-1">
          <a href={alternative.website} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Website
          </a>
        </Button>
        {alternative.github && (
          <Button asChild size="sm" variant="outline" className="flex-1">
            <a href={alternative.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}