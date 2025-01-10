import path from 'path'
import bibtexParse from 'bibtex-parse-js'
import type { Publication } from '../types/publication'

export async function getPublications(): Promise<Publication[]> {
  if (typeof window === 'undefined') {
    // Server-side code
    const fs = await import('fs')
    const filePath = path.join(process.cwd(), 'publications.bib')
    const bibFileContent = await fs.promises.readFile(filePath, 'utf8')
    const parsedBib = bibtexParse.toJSON(bibFileContent)

    return parsedBib.map(entry => ({
      id: entry.citationKey,
      title: entry.entryTags.TITLE,
      author: entry.entryTags.AUTHOR,
      year: parseInt(entry.entryTags.YEAR, 10),
      url: entry.entryTags.URL,
      category: entry.entryTags.abbr,
      tags: entry.entryTags.tags ? entry.entryTags.tags.split(',') : [],
    }))
  } else {
    // Client-side code
    throw new Error('getPublications can only be called on the server side')
  }
}
