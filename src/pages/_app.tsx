//falta SEO
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import NextNprogress from 'nextjs-progressbar'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Makeup Store</title>
        <link rel="shortcut icon" href="/img/makeup.png" />
        <link rel="apple-touch-icon" href="/img/makeup.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#141620" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content="The best Makeup Store in the world!"
        />
      </Head>
      <GlobalStyles />
      <NextNprogress
        color="#F231A5"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
