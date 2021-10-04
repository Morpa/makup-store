import { AddShoppingCart } from '@styled-icons/material-outlined'

import Button, { ButtonProps } from 'components/Button'

type CartButtonProps = { hasText?: boolean } & Pick<ButtonProps, 'size'>

export const CartButton = ({
  size = 'small',
  hasText = false
}: CartButtonProps) => {
  return (
    <Button icon={<AddShoppingCart />} size={size} aria-label="Add to cart">
      {hasText && 'Add to cart'}
    </Button>
  )
}
