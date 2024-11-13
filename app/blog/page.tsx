import { Metadata } from 'next'
import { Fragment } from 'react'
import { Contact } from '../../components/contact'
import { Blog24 } from '../../components/icons'
import PostList from '../../components/postList'
import { getAllFrontMatters } from '../../lib/mdx'

export const metadata: Metadata = {
  title: 'Blog',
}

export default async function Blog() {
  const posts = await getAllFrontMatters()
  return (
    <Fragment>
      <span className="inline-flex p-3 rounded-full bg-back-subtle">
        <Blog24 />
      </span>
      <h1 className="mt-3 mb-2 text-2xl font-bold tracking-tight text-accent">
        Blog
      </h1>

      <p className="mb-2 text-fore-subtle">
        Welcome to my little corner of the internet! Here's where I dump my
        brain thoughts about research, random discoveries, and whatever else
        catches my attention. <b>Fair warning</b>: I update this about as
        frequently as I remember to water my plants - which is to say, when I
        remember they exist 😅
      </p>
      <div className="border-t-2 border-dotted border-back-subtle"></div>
      <PostList />
    </Fragment>
  )
}
