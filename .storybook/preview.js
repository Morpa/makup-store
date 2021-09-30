import '../.jest/next-image.mock'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  backgrounds: {
    default: 'movie-dark',
    values: [
      {
        name: 'movie-light',
        value: theme.colors.white
      },
      {
        name: 'movie-dark',
        value: theme.colors.background
      }
    ]
  }
}


export const decorators = [
  (Story) => (
      <ThemeProvider theme={theme}>
          <GlobalStyles removeBg />
          <Story />
      </ThemeProvider>
  )
]
