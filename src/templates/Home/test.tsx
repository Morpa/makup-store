import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import bannerMock from 'components/BannerSlider/mock'
import productsMock from 'components/ProductCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import { Home } from '.'

const props = {
  banners: bannerMock,
  blushProducts: productsMock,
  blushTitle: 'New Blushs',
  eyeshadowProducts: productsMock,
  eyeShadowTitle: 'Eyeshadow',
  lipstickProducts: productsMock,
  lipstickTitle: 'Hots Lipsticks',
  nailpolishProducts: productsMock,
  nailPolishTitle: 'Nail Polish',
  mostPopularHighlight: highlightMock,
  upcomingHighlight: highlightMock,
  recommendedHighlight: highlightMock
}

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    Base: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Base">{children}</div>
    }
  }
})

jest.mock('components/ShowCase', () => {
  return {
    __esModule: true,
    ShowCase: function Mock() {
      return <div data-testid="Mock Showcase" />
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    BannerSlider: function Mock() {
      return <div data-testid="Mock Banner Slider" />
    }
  }
})

describe('<Home />', () => {
  it('should render banner and showcases', () => {
    render(<Home {...props} />)

    expect(screen.getByTestId('Mock Banner Slider')).toBeInTheDocument()

    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4)
  })
})
