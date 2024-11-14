export type Project = {
  id: string
  title: string
  description: string
  type: 'Open Source' | 'Game'
  year: string
  tags?: string[]
  thumbnail?: string
  selected?: boolean
  github?: string // GitHub repository link
  link: string // General link when clicking the title
  url?: string // Project page link
}
