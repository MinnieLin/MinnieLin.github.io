import React from 'react'
import { getMdxByPath } from '../lib/mdx'
import { components } from './mdxComponents'
import { getMDXComponent } from 'mdx-bundler/client'

export async function Introduction() {
  const { code } = await getMdxByPath('content/introduction.mdx')
  const Component = getMDXComponent(code)

  return (
    <div className="relative text-primary">
      <article className="max-w-3xl min-w-0 leading-tight text-base lg:text-base">
        <Component components={components} />
      </article>
    </div>
  )
}

// TODO: This is just a workaround. See https://github.com/vercel/next.js/issues/42292
export default (Introduction as unknown) as (props: any) => JSX.Element
