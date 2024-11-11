import { NavLink } from './atoms'
import {
  GitHub24,
  MailAt24,
  Twitter24,
  GoogleScholar24,
  LinkedIn24,
} from './icons'

const routes = [
  {
    path: '/',
    label: 'HOME',
    exact: true,
  },
  {
    path: '/blog',
    label: 'BLOG',
  },
  {
    path: '/projects',
    label: 'PROJECTS',
  },
  {
    path: '/about',
    label: 'ABOUT',
  },
  {
    path: '/publications',
    label: 'PUBLICATIONS',
  },
]

const lastUpdated = new Date().toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

export function Footer() {
  return (
    <footer className="relative w-full h-36 overflow-hidden bg-back-secondary text-secondary">
      <div className="container h-full px-5 pt-8 pb-8 m-auto max-w-screen-xl md:px-20">
        <div className="container flex-col justify-between md:space-y-8">
          <nav className="flex-row items-center justify-center hidden space-x-6 text-sm lg:flex md:justify-end">
            {routes.map(route => (
              <NavLink key={route.path} to={route.path} title={route.label}>
                {route.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex flex-col-reverse space-y-8 space-y-reverse md:flex-row md:justify-between md:space-y-0">
            <span
              className="self-center text-xs tracking-wider md:self-end"
              aria-label="Copyright"
            >
              © 2024 - present. Zexin (Jason) Xu. All Rights Reserved.
              <br />
              Built with{' '}
              <a className="underline" href="https://nextjs.org/">
                Next.js
              </a>{' '}
              and{' '}
              <a className="underline" href="https://pages.github.com/">
                Github Pages
              </a>
              . Last updated: {lastUpdated}
            </span>
            <div className="flex flex-row items-center justify-center space-x-6 md:justify-end">
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
    </footer>
  )
}
