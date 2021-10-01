import { AddShoppingCart } from '@styled-icons/material-outlined'

import Button, { ButtonProps } from 'components/Button'

type CartButtonProps = Pick<ButtonProps, 'size'>

export const CartButton = ({ size = 'small' }: CartButtonProps) => {
  return (
    <Button icon={<AddShoppingCart />} size={size} aria-label="Add to cart">
      Add to cart
    </Button>
  )
}
