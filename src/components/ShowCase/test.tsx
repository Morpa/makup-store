import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import productsMock from 'components/ProductCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import { ShowCase } from '.'

const props = {
  title: 'Most Popular',
  highlight: highlightMock,
  products: productsMock.slice(0, 1)
}

describe('<ShowCase />', () => {
  it('should render full showcase', () => {
    render(<ShowCase {...props} />)

    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: highlightMock.title }))

    expect(screen.getByRole('heading', { name: productsMock[0].title }))
  })

  it('should render without title', () => {
    render(<ShowCase products={props.products} highlight={props.highlight} />)

    screen.getByRole('heading', { name: highlightMock.title })
    screen.getByRole('heading', { name: productsMock[0].title })

    expect(
      screen.queryByRole('heading', { name: /most popular/i })
    ).not.toBeInTheDocument()
  })

  it('should render without highlight', () => {
    render(<ShowCase title={props.title} products={props.products} />)

    screen.getByRole('heading', { name: /most popular/i })
    screen.getByRole('heading', { name: productsMock[0].title })

    expect(
      screen.queryByRole('heading', { name: highlightMock.title })
    ).not.toBeInTheDocument()
  })

  it('should render without products', () => {
    render(<ShowCase title={props.title} highlight={props.highlight} />)

    screen.getByRole('heading', { name: /most popular/i })
    screen.getByRole('heading', { name: highlightMock.title })

    expect(
      screen.queryByRole('heading', { name: productsMock[0].title })
    ).not.toBeInTheDocument()
  })
})
