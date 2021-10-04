import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import productMock from './mock'

import { Product, ProductTemplateProps } from '.'

const props: ProductTemplateProps = {
  id: productMock.id,
  cover: productMock.cover,
  description: productMock.description,
  title: productMock.title,
  price: productMock.price,
  upcomingHighlightTitle: productMock.upcomingHighlightTitle,
  upcomingHighlight: productMock.upcomingHighlight,
  upcomingProducts: productMock.upcomingProducts,
  gallery: productMock.gallery
}

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    Base: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Base">{children}</div>
    }
  }
})

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    Menu: function Mock() {
      return <div data-testid="Mock Menu" />
    }
  }
})

jest.mock('components/Gallery', () => {
  return {
    __esModule: true,
    Gallery: function Mock() {
      return <div data-testid="Mock Gallery" />
    }
  }
})

jest.mock('components/ProductInfo', () => {
  return {
    __esModule: true,
    ProductInfo: function Mock() {
      return <div data-testid="Mock ProductInfo" />
    }
  }
})

describe('<Product />', () => {
  it('should render the template with components', () => {
    render(<Product {...props} />)
    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument()
    expect(screen.getByTestId('Mock ProductInfo')).toBeInTheDocument()
    expect(screen.getByText(/custom html/i)).toBeInTheDocument()
  })

  it('should not render the gallery if no colors', () => {
    render(<Product {...props} gallery={undefined} />)

    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument()
  })

  it('should not render the gallery on mobile', () => {
    render(<Product {...props} />)

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyle({
      display: 'none'
    })

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)'
      }
    )
  })

  it('should render the cover image', () => {
    render(<Product {...props} />)

    const cover = screen.getByRole('img', {
      name: /title/i
    }).parentElement

    expect(cover).toHaveStyleRule('height', '70rem', {
      media: '(min-width: 768px)'
    })

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
