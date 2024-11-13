import { format, parseISO } from 'date-fns'
import { Props } from 'next/script'
import React from 'react'
import { getAllNews } from '../lib/mdx'
import { getMDXComponent } from 'mdx-bundler/client'
import { components } from './mdxComponents'

export async function NewsList({
  showHeading = false,
}: {
  showHeading?: boolean
}) {
  const news = await getAllNews()

  return (
    <section>
      {showHeading && (
        <h2 className="mt-64 text-accent tracking-[.2em]">NEWS</h2>
      )}
      <div className="max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-back-subtle scrollbar-track-transparent -mx-7">
        <ul className="mt-3">
          {news.map(item => {
            const Content = getMDXComponent(item.code)
            return (
              <li key={item.slug} className="border-b border-back-subtle mx-8">
                {' '}
                {/* Moved border here and added mx-8 */}
                <div className="flex flex-row justify-between items-center py-2">
                  <div className="text-sm font-medium pr-4 flex-1 min-w-0">
                    <div className="my-0">
                      <Content
                        components={{
                          ...components,
                          p: props => (
                            <p {...props} className="my-0 hover:text-accent" />
                          ),
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-sm text-fore-subtle whitespace-nowrap">
                    {format(
                      parseISO(item.frontmatter.publishedAt),
                      'MMM dd, yyyy'
                    )}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

// TODO: This is just a workaround. See https://github.com/vercel/next.js/issues/42292
export default (NewsList as unknown) as (props: Props) => JSX.Element
