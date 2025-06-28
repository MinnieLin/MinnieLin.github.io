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
                <div className="flex flex-row justify-between items-center px-8 py-2 transition-colors ease-in-out -mx-7 group hover:bg-back-secondary focus:bg-back-secondary focus:text-accent">
                  <div className="text-sm font-medium pr-4 flex-1 min-w-0">
                    <div className="my-0">
                      <Content
                        components={{
                          ...components,
                          p: props => (
                            <p
                              {...props}
                              className="my-0 group-hover:text-accent"
                            />
                          ),
                          a: props => (
                            <a
                              {...props}
                              className="text-accent group-hover:underline"
                            />
                          ),
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-sm text-fore-subtle whitespace-nowrap group-hover:text-accent">
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

export default (NewsList as unknown) as (props: Props) => JSX.Element
