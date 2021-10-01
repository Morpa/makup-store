import userEvent from '@testing-library/user-event'

import { act, render, screen, waitFor } from 'utils/test-utils'
import { WishlistButton } from '.'

describe('<WishlistButton/>', () => {
  it('should render a button with add to wishlist text', () => {
    render(<WishlistButton hasText />)

    expect(screen.getByText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render a button in minimal version', () => {
    render(<WishlistButton hasText />)

    expect(
      screen.getByRole('button', { name: /add to wishlist/i })
    ).toHaveStyleRule('background', 'none', {
      modifier: ':hover'
    })
  })

  it('should add to wishlist', async () => {
    const wishlistProviderProps = {
      addToWishlist: jest.fn()
    }

    render(<WishlistButton hasText />)

    act(() => {
      userEvent.click(screen.getByText(/add to wishlist/i))
    })

    waitFor(() => {
      expect(wishlistProviderProps.addToWishlist).toHaveBeenCalledWith('1')
    })
  })
})
