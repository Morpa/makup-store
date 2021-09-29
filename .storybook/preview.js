import '../.jest/next-image.mock'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  backgrounds: {
    default: 'cine-dark',
    values: [
      {
        name: 'cine-light',
        value: theme.colors.white
      },
      {
        name: 'cine-dark',
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
