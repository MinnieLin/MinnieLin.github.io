// app/publications/page.tsx
import { Metadata } from 'next'
import { Fragment } from 'react'
import PublicationList from '../../components/publicationList'
import { Papers24 } from '../../components/icons'

export const metadata: Metadata = {
  title: 'Publications',
}

export default function Publications() {
  return (
    <Fragment>
      <span className="inline-flex p-3 rounded-full bg-back-subtle">
        <Papers24 />
      </span>
      <h1 className="mt-3 mb-2 text-2xl font-bold tracking-tight text-accent">
        Publications
      </h1>

      <p className="mb-2 text-fore-subtle">
        My research sits at the intersection of psychology and emerging technologies such as virtual reality, games, and generative AI. By integrating learning theory with user-centered design, I aim to create evidence-based learning experiences that faciliate learning and motivation.
      </p>
      <div className="border-t-2 border-dotted border-back-subtle"></div>
      <PublicationList selectedOnly={false} />
    </Fragment>
  )
}

