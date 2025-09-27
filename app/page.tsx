import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Blob } from '../components/atoms'
import {
  MailAt24,
  GitHub24,
  Twitter24,
  Blog24,
  GoogleScholar24,
  LinkedIn24,
  News24,
  Papers24,
  Project24,
} from '../components/icons'
import PostList from 'components/postList'
import NewsList from 'components/newsList'
import PublicationList from 'components/publicationList'
import ProjectList from 'components/projectList'
import Introduction from '../components/introduction'
import avatar from '../public/images/profile-img.jpeg'
import { components as mdx } from '../components/mdxComponents'
import { wenKai } from './fonts'

export default async function Page() {
  return (
    <div>
      <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:space-x-6">
        {/* Introduction  */}
        <div>
          <p className="max-w-3xl mt-12 mb-2 text-3xl font-semibold lg:mt-0 sm:text-4xl sm:text-left md:text-left lg:text-left">
            Hi, I’m Qiyang Lin
            <span className={wenKai.className} >(林祺阳</span>)! 
          </p>
          <div className="text-sm mb-4">
            <mdx.code showLineNumbers={false} fileName={''} id="">
              💡 My name is pronounced as "Chi-Yang Lin", and I also go by{' '}
              <b>Minnie</b>.
            </mdx.code>
          </div>
          <div className="relative text-primary">
            <Introduction />
          </div>
        </div>
        {/* Avatar  */}
        <div>
          <div className="relative">
            {/* <Blob /> */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* White border with shadow */}
                <div className="w-36 h-36 md:w-44 md:h-44 lg:w-60 lg:h-60 bg-white rounded-full avatar-white-border"></div>
                {/* Avatar image */}
                <div className="absolute inset-1 w-34 h-34 overflow-hidden rounded-full md:h-42 md:w-42 lg:h-58 lg:w-58 pointer-events-none">
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
          </div>
          {/* Social Links  */}
          <div className="mt-5">
            <div className="flex flex-row items-center space-x-5 justify-center">
              <span className="scale-125">
                <a
                  href="mailto:linqiyan@msu.edu"
                  aria-label="Email linqiyan@msu.edu"
                  title="Email"
                  className="focus:text-accent"
                >
                  <MailAt24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
              <span className="scale-125">
                <a
                  href="https://x.com/QiyangLin1"
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
                  href="https://scholar.google.com/citations?user=n2OJ_jIAAAAJ&hl=en"
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
                  href="https://www.linkedin.com/in/qiyang-lin-minnie/"
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
          {/* CV  */}
          <div className="mx-1 mt-2 flex items-center justify-center">
            <Link
              href="https://drive.google.com/file/d/1dqvDvyfXSrcKADPe7AC_Tv70DCRf4GSN/view?usp=drive_link" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center space-x-2 rounded-lg bg-transparent px-4 py-2 transition-all duration-300 ease-in-out hover:scale-125 hover:-translate-y-0"
            >
              <span className="text-xs text-fore-subtle transition-colors duration-300 group-hover:text-accent">
                CV (Last Updated: 09/25/2025)
              </span>
              <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:from-accent/5 group-hover:to-transparent group-hover:opacity-100" />
            </Link>
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
          Selected Publications
        </span>
      </div>
      <PublicationList selectedOnly={true} />
      <div className="mx-1 mt-6 flex justify-left items-center">
        <Link
          href="/publications"
          className="flex items-center space-x-2 text-fore-subtle hover:text-accent transition-transform ease-in-out hover:translate-x-1"
        >
          <span className="text-xs uppercase tracking-[.2em]">
            All Publications
          </span>
          <span>→</span>
        </Link>
      </div>
      {/* ProjectList */}
      <div className="flex items-center mt-16 space-x-3">
        <span className="p-3 rounded-full bg-back-subtle">
          <Project24 />
        </span>
        <span className="mt-3 mb-2 uppercase tracking-[.2em] text-accent">
          Selected Projects
        </span>
      </div>
      <ProjectList selectedOnly={true} />
      <div className="mx-1 mt-6 flex justify-left items-center">
        <Link
          href="/projects"
          className="flex items-center space-x-2 text-fore-subtle hover:text-accent transition-transform ease-in-out hover:translate-x-1"
        >
          <span className="text-xs uppercase tracking-[.2em]">
            All Projects
          </span>
          <span>→</span>
        </Link>
      </div>
      {/* Blogs  */}
      {/* <div className="flex items-center mt-16 space-x-3">
        <span className="p-3 rounded-full bg-back-subtle">
          <Blog24 />
        </span>
        <span className="mt-3 mb-2 uppercase tracking-[.2em] text-accent">
          Blogs
        </span>
      </div>
      <PostList />
      <div className="mx-1 mt-6 flex justify-left items-center">
        <Link
          href="/blog"
          className="flex items-center space-x-2 text-fore-subtle hover:text-accent transition-transform ease-in-out hover:translate-x-1"
        >
          <span className="text-xs uppercase tracking-[.2em]">
            All Blog Posts
          </span>
          <span>→</span>
        </Link>
      </div> */}
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
