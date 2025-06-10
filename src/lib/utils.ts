import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export function formatDate(date: string): string {
  const d = new Date(date)
  const now = new Date()
  const diffInHours = (now.getTime() - d.getTime()) / (1000 * 60 * 60)
  
  if (diffInHours < 24) {
    return `${Math.floor(diffInHours)} hours ago`
  }
  if (diffInHours < 168) { // 7 days
    return `${Math.floor(diffInHours / 24)} days ago`
  }
  if (diffInHours < 720) { // 30 days
    return `${Math.floor(diffInHours / 168)} weeks ago`
  }
  return `${Math.floor(diffInHours / 720)} months ago`
}