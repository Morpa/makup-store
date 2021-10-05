import { render, screen } from 'utils/test-utils'

import { Loading } from '.'

describe('<Loading />', () => {
  it('should render the heading', () => {
    const { container } = render(<Loading />)

    expect(
      screen.getByRole('img', {
        name: /Loading more products/i
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
