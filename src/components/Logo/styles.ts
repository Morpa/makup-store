import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 16rem;
    height: 3.3rem;
  `,

  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 5.8rem;
      height: 4.5rem;
      align-items: center;


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
