import { render, screen } from 'utils/test-utils'

import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/morpa/1042x580',
  title: 'Deadpool',
  subtitle: '<p>Watch the new movie</p>',
  buttonLabel: 'More info',
  buttonLink: '/movies/deadpool'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = render(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /Deadpool/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Watch the new movie/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Deadpool/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
