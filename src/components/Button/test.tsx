import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import { render, screen } from 'utils/test-utils'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = render(<Button>Save</Button>)

    expect(screen.getByRole('button', { name: /Save/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    render(<Button size="small">Save</Button>)

    expect(screen.getByRole('button', { name: /Save/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    render(<Button size="large">Save</Button>)

    expect(screen.getByRole('button', { name: /Save/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a fullWidth version', () => {
    render(<Button fullWidth>Save</Button>)

    expect(screen.getByRole('button', { name: /Save/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    render(<Button icon={<AddShoppingCart data-testid="icon" />}>Save</Button>)

    expect(screen.getByText(/Save/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render a minimal version', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Save
      </Button>
    )

    expect(screen.getByRole('button', { name: /Save/i })).toHaveStyle({
      background: 'none',
      color: '#00359d'
    })

    expect(screen.getByRole('button', { name: /Save/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover'
      }
    )
  })

  it('should render a disabled Button', () => {
    render(<Button disabled>Save</Button>)

    expect(screen.getByRole('button', { name: /Save/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })

  it('should render Button as a link', () => {
    render(
      <Button as="a" href="/link">
        Save
      </Button>
    )

    expect(screen.getByRole('link', { name: /Save/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
