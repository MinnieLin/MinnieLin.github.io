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
  GoogleScholar24,
  LinkedIn24,
} from '../components/icons'
import PostList from '../components/postList'
import ProjectList from '../components/projectList'
import avatar from '../public/images/about-img-2.jpg'
import { components as mdx } from '../components/mdxComponents'

export default async function Page() {
  return (
    <div>
      <div className="flex flex-col-reverse items-center mt-12 lg:flex-row lg:justify-between lg:space-x-6">
        <div>
          <p className="max-w-3xl mt-12 text-3xl font-semibold lg:mt-0 sm:text-4xl sm:text-left md:text-left lg:text-left">
            Hi there, I’m Jason! 👋
          </p>
          <div className="relative text-primary">
            <article className="max-w-2xl min-w-0 text-base lg:text-lg text-fore-subtle">
              <mdx.p>
                <b>About Me</b>: I am an alumnus of The Ohio State University,
                where I earned my M.S. in Computer Science and Engineering under
                the expert guidance of{' '}
                <mdx.a href="https://google.com">Dr. Yu Su. </mdx.a> Driven by a
                vision to leverage AI for the betterment of humanity, my
                academic interests has spanned across NLP, Vision & Language,
                Embodied AI, and Large Language Models. During my master’s
                program, I led the software engineering team for SalsaBot,
                contributing significantly to the first Amazon Alexa Prize
                Simbot Challenge. Prior to pursuing my master’s degree, I
                obtained my B.S. degree in Computer Science and Engineering from
                The Ohio State University. <br />
                oh!fdsfffdsfdsfdadsfafa <br />
                okokokoko
              </mdx.p>
            </article>
          </div>
        </div>
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
          <div className="mt-5">
            <div className="flex flex-row items-center space-x-5 justify-center">
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
              <span>
                <a
                  href="https://twitter.com/jeffjadulco"
                  aria-label="Visit Google Scholar Profile"
                  title="Visit Google Scholar Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:text-accent"
                >
                  <GoogleScholar24 className="transition-transform ease-in-out hover:-translate-y-1 hover:text-accent" />
                </a>
              </span>
              <span>
                <a
                  href="https://twitter.com/jeffjadulco"
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
