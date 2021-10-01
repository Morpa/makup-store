import Link from 'next/link'

import { Heading } from 'components/Heading'
import { Logo } from 'components/Logo'
import * as S from './styles'

export const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact Us
        </Heading>

        <a href="mailto:sac@makeupstore.com">sac@makeupstore.com</a>
      </S.Column>

      <S.Column aria-labelledby="social-media">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Follow us
        </Heading>

        <nav id="social-media">
          <a
            href="https://www.instagram.com/makeup-store"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/makeup-store"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/makeup-store"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/makeup-store"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="resources">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Links
        </Heading>

        <nav id="resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/products">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-label="contact">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Makeup Store 2021 © All rights reserved.</S.Copyright>
  </S.Wrapper>
)
