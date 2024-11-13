// components/PublicationList.tsx
import React, { use } from 'react'
import Link from 'next/link'
import { getAllPublications } from '../lib/publications'
import { Publication } from '../types/publication'

interface PublicationListProps {
  selectedOnly?: boolean
}

// Note: removed async keyword from component function
export function PublicationList({
  selectedOnly = false,
}: PublicationListProps) {
  // Move the async operation outside the component
  const publications = use(getAllPublications())

  // Filter publications if selectedOnly is true
  const filteredPubs = selectedOnly
    ? publications.filter(pub => pub.selected)
    : publications

  // Group publications by year
  const groupedPubs = filteredPubs.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = []
    }
    acc[pub.year].push(pub)
    return acc
  }, {} as Record<number, Publication[]>)

  // Sort years in descending order
  const years = Object.keys(groupedPubs)
    .map(Number)
    .sort((a, b) => b - a)

  const formatAuthors = (authors: string[]) => {
    return authors.map((author, index) => {
      const isMe = author.includes('Zexin Xu')
      return (
        <React.Fragment key={index}>
          {index > 0 && ', '}
          {isMe ? (
            <span className="underline font-bold">{author}</span>
          ) : (
            <span>{author}</span>
          )}
        </React.Fragment>
      )
    })
  }

  return (
    <section>
      <div className="mt-3">
        {years.map((year, yearIndex) => (
          <div key={year}>
            {yearIndex !== 0 && <hr className="border-back-subtle my-6" />}
            <div className="grid grid-cols-[1fr_80px] gap-8">
              {' '}
              {/* Swapped the column widths */}
              <div className="border-back-subtle space-y-8">
                {groupedPubs[year].map((pub, index) => (
                  <li key={index} className="group list-none">
                    <div>
                      <div className="flex items-start gap-8 ">
                        <span className="text-lg font-semibold group-hover:text-accent">
                          {pub.title}
                        </span>
                      </div>
                      <p className="text-sm text-fore-subtle">
                        {formatAuthors(pub.authors)}
                      </p>
                      <p className="text-sm italic text-fore-subtle">
                        {pub.venue}
                      </p>
                      <div className="mt-1 space-x-4">
                        {pub.abbr && (
                          <span className="inline-block px-2 py-1 text-xs border border-accent font-medium bg-accent text-white rounded">
                            {pub.abbr}
                          </span>
                        )}
                        {pub.pdf && (
                          <Link
                            href={pub.pdf}
                            className="inline-block px-2 py-1 text-xs border border-accent text-accent hover:bg-accent hover:text-white rounded transition-colors"
                            target="_blank"
                          >
                            PDF
                          </Link>
                        )}
                        {pub.url && !pub.pdf && (
                          <Link
                            href={pub.url}
                            className="inline-block px-3 py-1 text-sm border border-accent text-accent hover:bg-accent hover:text-white rounded transition-colors"
                            target="_blank"
                          >
                            PDF
                          </Link>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </div>
              <div className="text-3xl text-fore-subtle text-right opacity-20">
                {' '}
                {/* Added text-right */}
                {year}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PublicationList
