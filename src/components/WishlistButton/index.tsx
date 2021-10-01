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
      style={{ filter: 'none' }}
    >
      Add to Wishlist
    </Button>
  )
}
