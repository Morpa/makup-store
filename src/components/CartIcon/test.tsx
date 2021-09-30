import { render, screen } from 'utils/test-utils'

import { CartIcon } from '.'

describe('<CartIcon />', () => {
  it('should render with badge', () => {
    render(<CartIcon />)

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()

    expect(screen.getByText(/1/)).toBeInTheDocument()
  })
})
