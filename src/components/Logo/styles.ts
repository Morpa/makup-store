import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 21rem;
  `,

  large: () => css`
    width: 26rem;
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 7rem;

      svg {
        height: 5rem;
        pointer-events: none;
      }

      .text {
        display: none;
      }
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ size, hideOnMobile }) => css`
    ${!!size && wrapperModifiers[size]};
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile};
  `}
`
