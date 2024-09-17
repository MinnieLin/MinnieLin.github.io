'use client'

import { Fragment, useState } from 'react'
import { GetServerSideProps } from 'next'
import { ButtonPop } from '../../components/buttonAccent'
import { Contact } from '../../components/contact'
import { getPublications } from '../../lib/getPublications'
import { Project24 } from '../../components/icons'

import type { Publication } from '../../types/publication'

export const metadata = {
  title: 'Publications',
}

export default function Publications({
  initialPublications,
}: {
  initialPublications: Publication[]
}) {
  const [publications, setPublications] = useState<Publication[]>(
    initialPublications
  )
  const [filter, setFilter] = useState<string>('')

  const filteredPublications = filter
    ? publications.filter(pub => pub.category === filter)
    : publications

  return (
    <Fragment>
      <span className="inline-flex p-3 rounded-full bg-back-subtle">
        <Project24 />
      </span>
      <h1 className="mt-3 mb-2 text-2xl font-bold text-accent">Publications</h1>
      <p className="max-w-sm mb-12 text-fore-subtle">
        Academic publications and research papers
      </p>
      <div className="mb-6">
        <label
          htmlFor="filter"
          className="block mb-2 text-sm font-medium text-fore-primary"
        >
          Filter by Category
        </label>
        <select
          id="filter"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All</option>
          <option value="Amazon">Amazon</option>
          <option value="CVPR">CVPR</option>
          <option value="Languages">Languages</option>
          <option value="JOLR">JOLR</option>
        </select>
      </div>
      <section className="mb-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:-mx-6 justify-items-start md:grid-cols-3 lg:grid-cols-4">
          {filteredPublications.map(publication => {
            return (
              <ButtonPop key={publication.id}>
                <PublicationCard publication={publication} />
              </ButtonPop>
            )
          })}
        </div>
      </section>
      <Contact />
    </Fragment>
  )
}

function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <a href={publication.url} target="_blank" rel="noopener noreferrer">
      <div className="relative flex flex-col justify-between w-full h-full px-6 py-5 group bg-back-secondary hover:bg-back-secondary">
        <div className="flex justify-between pb-10 space-x-3 sm:space-x-0">
          <div>
            <h3 className="text-xl font-semibold text-fore-primary group-hover:text-accent">
              <span className=" focus:text-accent">{publication.title}</span>
            </h3>
            <h4 className="pr-3 mt-1 font-base text-fore-subtle">
              {publication.author}
            </h4>
          </div>
        </div>
        <div className="flex flex-wrap">
          {publication.tags?.map(tag => (
            <span
              key={tag}
              className="p-1 mb-2 mr-2 text-xs rounded-sm text-fore-subtle bg-back-subtle"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const publications = getPublications()
  return {
    props: {
      initialPublications: publications,
    },
  }
}
