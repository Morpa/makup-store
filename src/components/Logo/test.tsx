import { render, screen } from 'utils/test-utils'

import { Logo } from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    render(<Logo />)
    expect(screen.getByLabelText(/makeup store/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    render(<Logo color="black" />)
    expect(screen.getByLabelText(/makeup store/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a normal logo when size is default', () => {
    render(<Logo />)
    expect(screen.getByLabelText(/makeup store/i).parentElement).toHaveStyle({
      width: '16rem'
    })
  })

  it('should render a normal logo', () => {
    render(<Logo size="large" />)
    expect(screen.getByLabelText(/makeup store/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a bigger logo whithout text if hideOnMobile', () => {
    render(<Logo hideOnMobile />)
    expect(
      screen.getByLabelText(/makeup store/i).parentElement
    ).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    })
  })
})
