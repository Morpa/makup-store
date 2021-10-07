import Link from 'next/link'
import Image from 'next/image'
import { RatingView } from 'react-simple-star-rating'

import { CartButton } from 'components/CartButton'

import formatPrice from 'utils/format-price'

import * as S from './styles'

export type ProductCardProps = {
  id: string
  title: string
  brand: string
  img: string
  price: string
  rating: number
}

export const ProductCard = ({
  id,
  title,
  brand,
  img,
  price,
  rating
}: ProductCardProps) => (
  <S.Wrapper>
    <Link href={`product/${id}`} passHref>
      <S.ImageBox>
        <Image
          src={img}
          alt={title}
          placeholder="blur"
          blurDataURL={img}
          layout="fill"
          objectFit="cover"
          priority
        />
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={`product/${id}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Brand>{brand}</S.Brand>
        </S.Info>
      </Link>
      <S.RatingWrapper>
        <RatingView ratingValue={rating} />
      </S.RatingWrapper>

      <S.BuyBox>
        <S.Price>{formatPrice(Number(price))}</S.Price>
        <CartButton />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)
