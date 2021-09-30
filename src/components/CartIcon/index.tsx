import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart'

import * as S from './styles'

export const CartIcon = () => {
  return (
    <S.Wrapper>
      <S.Badge aria-label="Cart Items">1</S.Badge>
      <ShoppingCart aria-label="Shopping Cart" />
    </S.Wrapper>
  )
}
