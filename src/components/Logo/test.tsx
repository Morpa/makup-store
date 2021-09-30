import { render, screen } from 'utils/test-utils'

import { Logo } from '.'

describe('<Logo />', () => {
  it('should render a normal logo when size is default', () => {
    render(<Logo />)
    expect(screen.getByLabelText(/Movies Explorer/i).parentElement).toHaveStyle(
      {
        width: '16rem'
      }
    )
  })

  it('should render a normal logo', () => {
    render(<Logo size="large" />)
    expect(screen.getByLabelText(/Movies Explorer/i).parentElement).toHaveStyle(
      {
        width: '20rem'
      }
    )
  })

  it('should render a bigger logo whithout text if hideOnMobile', () => {
    render(<Logo hideOnMobile />)
    expect(
      screen.getByLabelText(/Movies Explorer/i).parentElement
    ).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width: 768px)'
    })
  })
})
