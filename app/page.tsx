import Image from 'next/image'
import React from 'react'
import { Blob } from '../components/atoms'
import { Contact } from '../components/contact'
import {
  MailAt24,
  GitHub24,
  Twitter24,
  Blog24,
  Project24,
} from '../components/icons'
import PostList from '../components/postList'
import ProjectList from '../components/projectList'
// import avatar from '../public/images/the-avatar.png'
import avatar from '../public/images/about-img.jpg'

export default async function Page() {
  return (
    <div>
      <div className="flex flex-col-reverse items-center mt-12 lg:flex-row lg:justify-between lg:space-x-6">
        <div>
          <p className="max-w-3xl mt-12 text-3xl font-semibold lg:mt-0 sm:text-4xl sm:text-left md:text-left lg:text-left">
            Hi, I’m Jeff. I’m an experienced game developer with deep interest
            in modern web development.
          </p>
          <div className="relative text-primary">
            text text see if the text render here
          </div>
        </div>
        <div>
          <div className="relative">
            <Blob />
            <div className="absolute top-0 flex items-center justify-center w-full h-full">
              <div className="w-32 h-32 overflow-hidden rounded-full md:h-40 md:w-40 lg:h-48 lg:w-48 pointer-events-none">
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
          <div className="mt-3">
            <div className="flex flex-row items-center space-x-4 justify-center">
              <span>
                <a
                  href="mailto:hey@jeffjadulco.com"
                  aria-label="Email hey@jeffjadulco.com"
                  title="Email"
                  className="focus:text-accent"
                >
                  <MailAt24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/jeffjadulco"
                  aria-label="Visit GitHub profile"
                  title="Visit GitHub profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:text-accent"
                >
                  <GitHub24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
              <span>
                <a
                  href="https://twitter.com/jeffjadulco"
                  aria-label="Visit Twitter profile"
                  title="Visit Twitter profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:text-accent"
                >
                  <Twitter24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-64 mb-8 space-x-3">
        <span className="p-3 rounded-full bg-back-subtle">
          <Blog24 />
        </span>
        <span className="mt-3 mb-2 uppercase tracking-[.2em] text-accent">
          WRITINGS
        </span>
      </div>
      <PostList />
      <div className="flex items-center mt-24 mb-8 space-x-3">
        <span className="p-3 rounded-full bg-back-subtle">
          <Project24 />
        </span>
        <span className="mt-3 mb-2 uppercase tracking-[.2em] text-accent">
          PROJECTS
        </span>
      </div>
      <ProjectList bOpenSourceOnly={true} />
      <Contact />
    </div>
  )
}
