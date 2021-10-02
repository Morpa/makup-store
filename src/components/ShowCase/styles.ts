import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components/Container'
import * as HeadingStyles from 'components/Heading/styles'
import * as ProductCardSliderStyles from 'components/ProductCardSlider/styles'

export const Wrapper = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${ProductCardSliderStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${ProductCardSliderStyles.Wrapper} {
      ${media.lessThan('huge')`
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }
    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`
