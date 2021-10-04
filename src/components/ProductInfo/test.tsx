import { render, screen } from 'utils/test-utils'

import { ProductInfo } from '.'

const props = {
  title: 'Product Title',
  description: 'Product Description',
  price: '210'
}

describe('<ProductInfo />', () => {
  it('should render product informations', () => {
    const { container } = render(<ProductInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /product title/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/product description/i)).toBeInTheDocument()

    expect(screen.getByText('210')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    render(<ProductInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
  })
})
