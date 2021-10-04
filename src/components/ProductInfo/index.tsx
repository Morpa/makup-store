import { CartButton } from 'components/CartButton'
import { Heading } from 'components/Heading'
import { Ribbon } from 'components/Ribbon'

import * as S from './styles'

export type ProductInfoProps = {
  title: string
  description: string
  price: string
}

export const ProductInfo = ({
  title,
  description,
  price
}: ProductInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{price}</Ribbon>

    <S.Description>{description}...</S.Description>

    <S.ButtonsWrapper>
      <CartButton size="large" hasText />
    </S.ButtonsWrapper>
  </S.Wrapper>
)
