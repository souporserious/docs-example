'use client'
import React from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { useStyledComponentsRegistry } from './hooks/useStyledComponentRegistry'
import { Sidebar } from './components/Sidebar'

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry()

  useServerInsertedHTML(() => {
    return <>{styledComponentsFlushEffect()}</>
  })

  return (
    <html lang="en">
      <body style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
        <aside>
          <Sidebar />
        </aside>
        <main
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '6rem 0',
            gap: '1rem',
          }}
        >
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </main>
      </body>
    </html>
  )
}
