'use client'
import * as React from 'react'
import type { MDXComponents } from 'mdx/types'
import { getComponent } from './get-component'

/** Renders a string of compiled MDX code as a client component. */
export function MDXComponent({ code }: { code: string }) {
  const { default: Component } = React.use(getComponent(code)) as {
    default: React.ComponentType<{
      components?: MDXComponents
    }>
  }

  return <Component components={{}} />
}
