// app/projects/page.tsx
import { Metadata } from 'next'
import { Fragment } from 'react'
import { Project24 } from '../../components/icons'
import ProjectList from '../../components/projectList'

export const metadata: Metadata = {
  title: 'Projects',
}

export default async function Projects() {
  return (
    <Fragment>
      <span className="inline-flex p-3 rounded-full bg-back-subtle">
        <Project24 />
      </span>
      <h1 className="mt-3 mb-2 text-2xl font-bold text-accent">Projects</h1>
      <div className="border-t-2 border-dotted border-back-subtle"></div>
      <ProjectList selectedOnly={false} />
    </Fragment>
  )
}
