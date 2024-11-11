'use client'

import { useAnalyticsEvent } from '../hooks/useAnalytics'
import { ExtLink, Button } from './atoms'
import { Top24 } from '../components/icons'

export function Contact() {
  const { trackCustomEvent } = useAnalyticsEvent()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="mt-32 full-width-container bg-back-secondary">
      <div className="container max-w-screen-xl pt-16 mx-auto">
        <h1 className="text-3xl font-semibold text-center">
          Get in touch{' '}
          <span role="img" aria-label="wave">
            🤝
          </span>
        </h1>
        <p className="text-md px-4 mt-4 text-center text-fore-secondary">
          Feel free to email me about anything. I am happy to chat and discuss
          potential collaborations!
        </p>
        <p className="text-md px-4 mt-1 text-center text-fore-secondary">
          You can also reach me around the web:{' '}
          <ExtLink link="https://github.com/asonjay">GitHub</ExtLink>,{' '}
          <ExtLink link="https://twitter.com/zexin_jason_xu">Twitter</ExtLink>,{' '}
          <ExtLink link="https://www.linkedin.com/in/zexin-xu/">
            LinkedIn
          </ExtLink>
        </p>

        {/* Add padding at bottom and center the button */}
        <div className="flex justify-center py-4">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 px-4 py-2 text-md font-medium text-accent hover:text-accent/80 transition-colors"
            aria-label="Scroll to top"
          >
            <Top24 />
            <span className="text-lg">Back to top</span>
            <Top24 />
          </button>
        </div>

        {/* <div className="flex justify-center pt-10 pb-2 mx-auto">
          <Button
            link="mailto:zexin.xu@utdallas.edu"
            onClick={() => {
              trackCustomEvent({ eventName: 'click-contact' })
            }}
          >
            <span className="text-2xl font-semibold text-back-secondary">
              Say hello 
            </span>
          </Button>
        </div> */}
      </div>
    </div>
  )
}
