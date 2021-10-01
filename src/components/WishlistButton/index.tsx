import { FavoriteBorder } from '@styled-icons/material-outlined'
import Button, { ButtonProps } from 'components/Button'

type WishlistButtonProps = {
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

export const WishlistButton = ({ size = 'small' }: WishlistButtonProps) => {
  return (
    <Button
      onClick={() => {
        console.log('clicked')
      }}
      minimal
      size={size}
      icon={<FavoriteBorder aria-label="Add to Wishlist" />}
    />
  )
}
