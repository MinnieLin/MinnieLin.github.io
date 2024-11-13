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

      <p className=" mb-2 text-fore-subtle">
        My research focuses on advancing the capabilities and security of Large
        Language Models (LLMs), with particular emphasis on code understanding,
        robustness against adversarial attacks, system integration, and
        educational applications. Current research directions include LLM-based
        code generation, attack/defense mechanisms for LLMs, development of
        reliable LLM-powered systems, and AI-enhanced educational technology.
      </p>
      <div className="mb-6 border-t-2 border-back-subtle"></div>
      <PublicationList selectedOnly={false} />
    </Fragment>
  )
}
