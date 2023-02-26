import { createMDXTSPlugin } from 'mdxts/next'

const withMDXTS = createMDXTSPlugin({
  gitSource: 'https://github.com/souporserious/docs-example',
  sources: {
    docs: 'docs/**/*.(tsx|mdx)',
  },
})

export default withMDXTS({
  experimental: {
    appDir: true,
  },
})
