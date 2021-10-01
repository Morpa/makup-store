import userEvent from '@testing-library/user-event'

import { act, render, screen, waitFor } from 'utils/test-utils'
import { WishlistButton } from '.'

describe('<WishlistButton/>', () => {
  it('should add to wishlist', async () => {
    const wishlistProviderProps = {
      addToWishlist: jest.fn()
    }

    render(<WishlistButton hasText />)

    act(() => {
      userEvent.click(screen.getByLabelText(/add to wishlist/i))
    })

    waitFor(() => {
      expect(wishlistProviderProps.addToWishlist).toHaveBeenCalledWith('1')
    })
  })
})
