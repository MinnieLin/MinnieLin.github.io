import { Metadata } from 'next'
import { Fragment } from 'react'
import { Contact } from '../../components/contact'
import { About24 } from '../../components/icons'
import { components as mdx } from '../../components/mdxComponents'
import { RichPresenceList } from '../../components/richPresenceList'
import { getRecentMovies } from '../../lib/letterboxd'

import { getDoingNow } from '../../lib/notion'
import { getCurrentlyPlaying, getRecentlyPlayed } from '../../lib/spotify'
import { getRecentGames } from '../../lib/steam'

import {
  SpotifyCurrentTrack,
  SpotifyRecentTracks,
} from '../../types/rich-presence'

export const metadata: Metadata = {
  title: 'About',
}

export default async function About() {
  let spotify:
    | SpotifyCurrentTrack
    | SpotifyRecentTracks
    | null = await getCurrentlyPlaying()
  if (spotify === null) {
    spotify = await getRecentlyPlayed()
  }

  const letterboxd = await getRecentMovies(1)
  const steam = await getRecentGames()
  const notion = await getDoingNow()

  return (
    <Fragment>
      <div className="container">
        <span className="inline-flex p-3 rounded-full bg-back-subtle">
          <About24 />
        </span>
        <h1 className="mt-3 mb-2 text-2xl font-bold tracking-tight text-accent">
          About Me
        </h1>
        <article className="max-w-2xl min-w-0 text-base lg:text-lg text-fore-subtle"></article>
        <h3 className="mb-4 text-2xl font-bold leading-tight mt-14 text-accent">
          Recents
        </h3>
        <RichPresenceList presenceList={[notion, spotify, letterboxd, steam]} />
      </div>
      <Contact />
    </Fragment>
  )
}

export const revalidate = 60
