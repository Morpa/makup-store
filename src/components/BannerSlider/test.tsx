import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import { BannerSlider } from '.'

const items = [
  {
    img: 'https://source.unsplash.com/user/morpa/1040x580',
    title: 'Ultra HD Face 1',
    buttonLabel: 'Buy now',
    buttonLink: '/products/essentials-palette'
  },
  {
    img: 'https://source.unsplash.com/user/morpa/1040x580',
    title: 'Ultra HD Face 2',
    buttonLabel: 'Buy now',
    buttonLink: '/products/essentials-palette'
  }
]

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = render(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render with 1 active item', () => {
    const { container } = render(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)

    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('heading', { name: /Ultra HD Face 1/i, hidden: false })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Ultra HD Face 2/i, hidden: true })
    ).toBeInTheDocument()
  })

  it('should render the dots', () => {
    const { container } = render(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
