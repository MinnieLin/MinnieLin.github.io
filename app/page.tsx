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
import PostList from '../components/postList'
// import ProjectList from '../components/projectList'
import avatar from '../public/images/profile-img.jpg'
import { components as mdx } from '../components/mdxComponents'
import { wenKai } from './fonts'

export default async function Page() {
  return (
    <div>
      <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:space-x-6">
        {/* Introduction  */}
        <div>
          <p className="max-w-3xl mt-12 mb-5 text-3xl font-semibold lg:mt-0 sm:text-4xl sm:text-left md:text-left lg:text-left">
            Hi there, I’m Zexin Xu (
            <span className={wenKai.className}>徐泽鑫</span>
            )! 👋
          </p>
          <div className="relative text-primary">
            <article className="max-w-3xl min-w-0 leading-tight text-base lg:text-base text-base">
              <mdx.p>
                <div className="mb-4">
                  <mdx.code
                    showLineNumbers={false}
                    fileName=""
                    id="introHeader"
                  >
                    💡 My name is pronounced as "Zeh-Shin She", and I also go by{' '}
                    <b>Jason</b>.
                  </mdx.code>
                </div>
                <div className="mb-2">
                  I am a first-year Ph.D. student in Computer Science at the
                  University of Texas at Dallas, advised by{' '}
                  <mdx.a href="https://youngwei.com/">Dr. Wei Yang</mdx.a>. My
                  research focuses on LLM-based systems and code Large Language
                  Models (LLMs), particularly their security aspects including
                  attack/defense mechanisms. Recently, I led team ASTRO to
                  participate in the{' '}
                  <mdx.a href="https://www.amazon.science/trusted-ai-challenge">
                    Amazon Trust AI Challenge
                  </mdx.a>
                  , where we were selected as one of the Red Teaming groups.
                  Beyond computer science research, I actively collaborate with
                  educational researchers to explore how LLMs can enhance
                  learning experiences and accelerate educational research
                  through their innovative integration in both teaching and
                  research contexts.
                </div>

                <div className="mb-2">
                  Prior to UTD, I completed both my M.S. and B.S. in Computer
                  Science and Engineering at The Ohio State University, where I
                  worked with{' '}
                  <mdx.a href="https://ysu1989.github.io/">Dr. Yu Su</mdx.a>.
                  During my master's program, I led the software engineering
                  team for SalsaBot in the{' '}
                  <mdx.a href="https://www.amazon.science/alexa-prize/simbot-challenge">
                    Amazon Alexa Prize SimBot Challenge
                  </mdx.a>
                  . In the field of learning technology, I collaborated with{' '}
                  <mdx.a href="https://www.faculty.uci.edu/profile/?facultyId=6178">
                    Dr. Di Xu (UCI)
                  </mdx.a>
                  ,{' '}
                  <mdx.a href="https://dr.ntu.edu.sg/cris/rp/rp02328">
                    Dr. Qiujie Li (NTU)
                  </mdx.a>
                  , and{' '}
                  <mdx.a href="https://new.every1graduates.org/zilu-jiang/">
                    Dr. Zilu Jiang (JHU)
                  </mdx.a>{' '}
                  on TimeWise, an educational conversational agent project. Our
                  team participated in the{' '}
                  <mdx.a href="https://tools-competition.org/">
                    Tools Competition 2024
                  </mdx.a>{' '}
                  and was selected as one of the five finalists among
                  approximately 2,000 submissions.
                </div>

                {/* Third paragraph */}
                <div>
                  Beyond academia, I'm a gamer and I was a Rank 1 Restoration
                  Shaman in World of Warcraft. When I'm not coding or gaming,
                  you can find me enjoying board games, playing basketball,
                  badminton, or swimming.
                </div>
              </mdx.p>
            </article>
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
      <div className="flex items-center mt-16  space-x-3">
        <span className="p-3 rounded-full bg-back-subtle">
          <News24 />
        </span>
        <span className="mt-3 mb-2 uppercase tracking-[.2em] text-accent">
          News
        </span>
      </div>
      <PostList />
      {/* Publications */}
      <div className="flex items-center mt-16 space-x-3">
        <span className="p-3 rounded-full bg-back-subtle">
          <Papers24 />
        </span>
        <span className="mt-3 mb-2 uppercase tracking-[.2em] text-accent">
          Publications
        </span>
      </div>
      <PostList />
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
      <Contact />
    </div>
  )
}
