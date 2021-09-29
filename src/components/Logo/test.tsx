import { render, screen } from 'utils/test-utils'

import { Logo } from '.'

describe('<Logo />', () => {
  it('should render a normal logo when size is default', () => {
    render(<Logo />)
    expect(screen.getByLabelText(/Movies Explorer/i).parentElement).toHaveStyle(
      {
        width: '21rem'
      }
    )
  })

  it('should render a normal logo', () => {
    render(<Logo size="large" />)
    expect(screen.getByLabelText(/Movies Explorer/i).parentElement).toHaveStyle(
      {
        width: '26rem'
      }
    )
  })

  it('should render a bigger logo whithout text if hideOnMobile', () => {
    render(<Logo hideOnMobile />)
    expect(
      screen.getByLabelText(/Movies Explorer/i).parentElement
    ).toHaveStyleRule('width', '7rem', {
      media: '(max-width: 768px)'
    })
  })
})
