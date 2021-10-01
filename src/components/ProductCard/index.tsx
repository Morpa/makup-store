import Link from 'next/link'
import Image from 'next/image'

import { CartButton } from 'components/CartButton'
import { WishlistButton } from 'components/WishlistButton'

import formatPrice from 'utils/format-price'

import * as S from './styles'

export type ProductCardProps = {
  id: string
  title: string
  brand: string
  img: string
  price: string
}

export const ProductCard = ({
  id,
  title,
  brand,
  img,
  price
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
      <S.FavButton>
        <WishlistButton />
      </S.FavButton>
      <S.BuyBox>
        <S.Price>{formatPrice(Number(price))}</S.Price>
        <CartButton />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)
