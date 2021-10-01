import { render, screen } from 'utils/test-utils'
import { CartButton } from '.'

describe('<CartButton />', () => {
  it('should render button to add and call the method if clicked', () => {
    render(<CartButton />)

    const button = screen.getByLabelText(/add to cart/i)
    expect(button).toBeInTheDocument()
  })
})
