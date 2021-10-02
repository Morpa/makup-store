import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import productsMock from 'components/ProductCardSlider/mock'

import { ShowCase } from '.'

const props = {
  title: 'Most Popular',
  products: productsMock.slice(0, 1)
}

describe('<ShowCase />', () => {
  it('should render full showcase', () => {
    render(<ShowCase {...props} />)

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: productsMock[0].title }))
  })

  it('should render without title', () => {
    render(<ShowCase products={props.products} />)

    screen.getByRole('heading', { name: productsMock[0].title })

    expect(
      screen.queryByRole('heading', { name: /most popular/i })
    ).not.toBeInTheDocument()
  })
})
