import Image from 'next/image'

import Button from 'components/Button'

import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  buttonLabel: string
  buttonLink: string
}

export const Banner = ({
  img,
  title,
  buttonLabel,
  buttonLink
}: BannerProps) => (
  <S.Wrapper>
    <S.ImageWrapper>
      <Image
        src={img}
        alt={title}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={img}
      />
    </S.ImageWrapper>

    <S.Caption>
      <S.Title>{title}</S.Title>
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)
