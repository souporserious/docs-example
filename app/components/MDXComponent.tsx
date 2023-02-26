'use client'
import * as React from 'react'
import type { MDXComponents } from 'mdx/types'
import Editor from '@monaco-editor/react'
import { getComponent } from './get-component'

/** Renders a string of compiled MDX code as a client component. */
export function MDXComponent({ code }: { code: string }) {
  const { default: Component } = React.use(getComponent(code)) as {
    default: React.ComponentType<{
      components?: MDXComponents
    }>
  }

  return (
    <Component
      components={{
        Summary: (props) => {
          return <div {...props} style={{ fontSize: '1.2rem' }} />
        },
        pre: ({ code, transformedCode, live, filename, ...props }: any) => {
          if (live) {
            return (
              <Editor
                value={code}
                language="typescript"
                theme="vs-dark"
                height="20rem"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  scrollBeyondLastLine: false,
                  lineNumbers: 'off',
                  lineDecorationsWidth: 0,
                  lineNumbersMinChars: 0,
                  glyphMargin: false,
                  folding: false,
                }}
              />
            )
          }

          return <pre {...props} />
        },
      }}
    />
  )
}
