import { render, screen } from 'utils/test-utils'

import theme from 'styles/theme'

import { ProductCard } from '.'

const props = {
  id: '1',
  title: 'Lippie Pencil',
  brand: 'Colourpop',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: '5.0',
  rating: '4'
}

describe('<ProductCard />', () => {
  it('should render correctly', () => {
    const { container } = render(<ProductCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.brand })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/product/${props.id}`
    )

    expect(screen.getByLabelText(/add to cart/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render price in label', () => {
    render(<ProductCard {...props} />)

    const price = screen.getByText('5,00 €')

    expect(price).not.toHaveStyle({ textDecoration: 'line-throug' })

    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })
})
