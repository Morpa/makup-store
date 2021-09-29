import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Movie News</title>
        <link rel="shortcut icon" href="/img/movie.png" />
        <link rel="apple-touch-icon" href="/img/movie.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#141620" />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta
          name="description"
          content="A simple project for movies fans with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
