import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compile } from '@mdx-js/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

export async function getIntroContent() {
  const introPath = path.join(process.cwd(), 'content/introduction.mdx')
  const fileContent = fs.readFileSync(introPath, 'utf8')

  // Parse frontmatter and content
  const { data, content } = matter(fileContent)

  // Compile MDX content
  const compiledContent = await compile(content, {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
    outputFormat: 'function-body',
    development: false,
  })

  return {
    frontmatter: data,
    content: String(compiledContent),
  }
}
