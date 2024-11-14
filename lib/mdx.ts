import fs from 'fs'
import path from 'path'
import globby from 'globby'
import readingTime from 'reading-time'
import { bundleMDX } from 'mdx-bundler'
import rehypeSlug from 'rehype-slug'
import rehypeHeadings from 'rehype-autolink-headings'
import rehypeHighlightCode from './rehype-highlight-code'
import rehypeMetaAttribute from './rehype-meta-attribute'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'

import type { Frontmatter } from '../types/frontmatter'
import type { Project } from '../types/project'

const MDX_PATH = 'content/blog'
const PROJECTS_PATH = 'content/projects'

async function getMdxBySlug(slug) {
  return getMdxByPath(path.join(MDX_PATH, `${slug}.mdx`))
}

async function getMdxByPath(mdxPath) {
  const slug = path.basename(mdxPath).replace(path.extname(mdxPath), '')
  const source = fs.readFileSync(path.join(process.cwd(), mdxPath), 'utf8')
  const { code, frontmatter } = await bundleMDX(source, {
    xdmOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeMetaAttribute,
        rehypeHighlightCode,
        rehypeAccessibleEmojis,
        rehypeSlug,
        [rehypeHeadings, { behavior: 'append' }],
      ]
      return options
    },
  })
  return {
    code,
    frontmatter: {
      ...(frontmatter as Frontmatter),
      slug,
      readingTime: readingTime(code),
    } as Frontmatter,
  }
}

async function getAllFrontMatters(): Promise<Frontmatter[]> {
  const paths = await globby([`${MDX_PATH}/**/*.mdx`])
  const matters = await Promise.all(
    paths.map(async filePath => {
      const source = fs.readFileSync(filePath, 'utf8')
      const { code, frontmatter } = await bundleMDX(source)

      return {
        ...(frontmatter as Frontmatter),
        slug: path.basename(filePath).replace('.mdx', ''),
        readingTime: readingTime(code, { wordsPerMinute: 300 }),
      }
    })
  )
  return matters
    .filter(Boolean)
    .filter(post => post.isPublished)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
}

async function getAllNews() {
  const paths = await globby(['content/news/**/*.mdx'])
  const news = await Promise.all(
    paths.map(async filePath => {
      const source = fs.readFileSync(filePath, 'utf8')
      const { code, frontmatter } = await bundleMDX(source)

      return {
        code,
        frontmatter,
        slug: path.basename(filePath).replace('.mdx', ''),
      }
    })
  )
  return news
    .filter(Boolean)
    .filter(news => news.frontmatter.isPublished)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.publishedAt).getTime() -
        new Date(a.frontmatter.publishedAt).getTime()
    )
}

async function getProjects(): Promise<Project[]> {
  const paths = await globby([`${PROJECTS_PATH}/**/*.mdx`])

  const projects = await Promise.all(
    paths.map(async filePath => {
      const source = fs.readFileSync(filePath, 'utf8')
      const { frontmatter } = await bundleMDX(source, {
        xdmOptions(options) {
          options.rehypePlugins = [
            ...(options.rehypePlugins ?? []),
            rehypeMetaAttribute,
            rehypeHighlightCode,
            rehypeAccessibleEmojis,
            rehypeSlug,
            [rehypeHeadings, { behavior: 'append' }],
          ]
          return options
        },
      })

      return {
        ...(frontmatter as Project),
        id: path.basename(filePath).replace('.mdx', ''),
        selected: Boolean(frontmatter.selected), // Explicitly convert to boolean
      }
    })
  )

  const sortedProjects = projects
    .filter(Boolean)
    .sort((a, b) => new Date(b.year).getTime() - new Date(a.year).getTime())

  return sortedProjects
}

async function getProjectBySlug(slug: string) {
  const mdxPath = path.join(PROJECTS_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(path.join(process.cwd(), mdxPath), 'utf8')
  const { code, frontmatter } = await bundleMDX(source, {
    xdmOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeMetaAttribute,
        rehypeHighlightCode,
        rehypeAccessibleEmojis,
        rehypeSlug,
        [rehypeHeadings, { behavior: 'append' }],
      ]
      return options
    },
  })

  return {
    code,
    frontmatter: {
      ...(frontmatter as Project),
      id: slug,
    } as Project,
  }
}

export {
  getAllFrontMatters,
  getAllNews,
  getMdxBySlug,
  getMdxByPath,
  getProjects,
  getProjectBySlug,
}
