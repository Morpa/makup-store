import { render, screen } from 'utils/test-utils'

import { Banner } from '.'

const props = {
  img: 'https://source.unsplash.com/user/morpa/1040x580',
  title: 'Ultra HD Face Essentials Palette',
  buttonLabel: 'Buy now',
  buttonLink: '/products/essentials-palette'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = render(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /Ultra HD Face Essentials Palette/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /Ultra HD Face Essentials Palette/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
