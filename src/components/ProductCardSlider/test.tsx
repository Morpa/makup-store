import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import { ProductCardSlider } from '.'

import items from './mock'

describe('<ProductCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = render(<ProductCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    render(<ProductCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous products/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next products/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
