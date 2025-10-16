import { Metadata } from 'next'
import { Fragment } from 'react'
import { Contact } from '../../components/contact'
import { Blog24 } from '../../components/icons'
import PostList from '../../components/postList'
import { getAllFrontMatters } from '../../lib/mdx'

export const metadata: Metadata = {
  title: 'Teaching',
}

export default async function Blog() {
  const posts = await getAllFrontMatters()
  return (
    <Fragment>
      <span className="inline-flex p-3 rounded-full bg-back-subtle">
        <Blog24 />
      </span>
      <h1 className="mt-3 mb-2 text-2xl font-bold tracking-tight text-accent">
        Teaching
      </h1>

      <p className="mb-2 text-fore-subtle">
        List of courses I taught or currently teaching...
      </p>
      <div className="border-t-2 border-dotted border-back-subtle"></div>
      <PostList />
    </Fragment>
  )
}
