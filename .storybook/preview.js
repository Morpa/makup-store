import '../.jest/next-image.mock'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  backgrounds: {
    default: 'makeup-dark',
    values: [
      {
        name: 'makeup-light',
        value: theme.colors.white
      },
      {
        name: 'makeup-dark',
        value: theme.colors.mainBg
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
