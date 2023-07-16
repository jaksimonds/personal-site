export interface IProject {
  id: number
  slug: string
  title: string
  excerpt: string
  url?: string
  thumbnail?: string
  year: number
  hero?: {
    image?: string
    intro?: string
  }
}