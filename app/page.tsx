import Image from 'next/image'
import React from 'react'
import { Blob } from '../components/atoms'
import { Contact } from '../components/contact'
import {
  MailAt24,
  GitHub24,
  Twitter24,
  Blog24,
  GoogleScholar24,
  LinkedIn24,
  News24,
  Papers24,
} from '../components/icons'
import PostList from 'components/postList'
import NewsList from 'components/newsList'
import PublicationList from 'components/publicationList'
import Introduction from '../components/introduction'
import avatar from '../public/images/profile-img.jpg'
import { components as mdx } from '../components/mdxComponents'
import { wenKai } from './fonts'

export default async function Page() {
  return (
    <div>
      <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:space-x-6">
        {/* Introduction  */}
        <div>
          <p className="max-w-3xl mt-12 mb-2 text-3xl font-semibold lg:mt-0 sm:text-4xl sm:text-left md:text-left lg:text-left">
            Hi there, I’m Zexin Xu (
            <span className={wenKai.className}>徐泽鑫</span>
            )! 👋
          </p>
          <div className="text-xs mb-4">
            <mdx.code showLineNumbers={false} fileName={''} id="">
              💡 My name is pronounced as "Zeh-Shin She", and I also go by{' '}
              <b>Jason</b>.
            </mdx.code>
          </div>
          <div className="relative text-primary">
            <Introduction />
          </div>
        </div>
        {/* Avatar  */}
        <div>
          <div className="relative">
            <Blob />
            <div className="absolute top-0 flex items-center justify-center w-full h-full">
              <div className="w-32 h-32 overflow-hidden rounded-full md:h-40 md:w-40 lg:h-56 lg:w-56 pointer-events-none">
                <Image
                  src={avatar}
                  alt="My avatar"
                  width={256}
                  height={256}
                  quality={100}
                  priority={true}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
          {/* Social Links  */}
          <div className="mt-5">
            <div className="flex flex-row items-center space-x-5 justify-center">
              <span className="scale-125">
                <a
                  href="mailto:zexin.xu@utdallas.edu"
                  aria-label="Email zexin.xu@utdallas.edu"
                  title="Email"
                  className="focus:text-accent"
                >
                  <MailAt24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
              <span className="scale-125">
                <a
                  href="https://github.com/asonjay"
                  aria-label="Visit GitHub profile"
                  title="Visit GitHub profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:text-accent"
                >
                  <GitHub24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
              <span className="scale-125">
                <a
                  href="https://x.com/zexin_jason_xu"
                  aria-label="Visit Twitter profile"
                  title="Visit Twitter profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:text-accent"
                >
                  <Twitter24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
              <span className="scale-125">
                <a
                  href="https://scholar.google.com/citations?user=NvnoD1kAAAAJ&hl=en"
                  aria-label="Visit Google Scholar Profile"
                  title="Visit Google Scholar Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:text-accent"
                >
                  <GoogleScholar24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
              <span className="scale-125">
                <a
                  href="https://www.linkedin.com/in/zexin-xu/"
                  aria-label="Visit LinkedIn Profile"
                  title="Visit LinkedIn Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:text-accent"
                >
                  <LinkedIn24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* News  */}
      <div className="flex items-center mt-16 space-x-3">
        <span className="p-3 rounded-full bg-back-subtle">
          <News24 />
        </span>
        <span className="mt-3 mb-2 uppercase tracking-[.2em] text-accent">
          News
        </span>
      </div>
      <NewsList />
      {/* Publications */}
      <div className="flex items-center mt-16 space-x-3">
        <span className="p-3 rounded-full bg-back-subtle">
          <Papers24 />
        </span>
        <span className="mt-3 mb-2 uppercase tracking-[.2em] text-accent">
          Publications
        </span>
      </div>
      <PublicationList selectedOnly={true} />
      {/* Blogs  */}
      <div className="flex items-center mt-16 space-x-3">
        <span className="p-3 rounded-full bg-back-subtle">
          <Blog24 />
        </span>
        <span className="mt-3 mb-2 uppercase tracking-[.2em] text-accent">
          Blogs
        </span>
      </div>
      <PostList />
      {/* <div className="flex items-center mt-32 mb-2 space-x-3">
        <span className="p-3 rounded-full bg-back-subtle">
          <Project24 />
        </span>
        <span className="mt-3 mb-2 uppercase tracking-[.2em] text-accent">
          PROJECTS
        </span>
      </div> */}
      {/* <ProjectList bOpenSourceOnly={true} /> */}
      {/* <Contact /> */}
    </div>
  )
}
