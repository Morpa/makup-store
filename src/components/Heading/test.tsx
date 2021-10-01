import { render, screen } from 'utils/test-utils'

import { Heading } from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    render(<Heading>Makeup Store</Heading>)
    expect(screen.getByRole('heading', { name: /makeup store/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading when color is passed', () => {
    render(<Heading color="black">Makeup Store</Heading>)
    expect(screen.getByRole('heading', { name: /makeup store/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading whith a line to the left side', () => {
    render(<Heading lineLeft>Makeup Store</Heading>)
    expect(screen.getByRole('heading', { name: /makeup store/i })).toHaveStyle({
      'border-left': '0.7rem solid #F231A5'
    })
  })

  it('should render a heading whith a line at the bottom', () => {
    render(<Heading lineBottom>Makeup Store</Heading>)
    expect(
      screen.getByRole('heading', { name: /makeup store/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render a heading with a huge size', () => {
    render(<Heading size="huge">Makeup Store</Heading>)

    expect(screen.getByRole('heading', { name: /makeup store/i })).toHaveStyle({
      'font-size': '5.2rem'
    })
  })

  it('should render a heading whith a small size', () => {
    render(<Heading size="small">Makeup Store</Heading>)
    expect(screen.getByRole('heading', { name: /makeup store/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(
      screen.getByRole('heading', { name: /makeup store/i })
    ).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    })
  })

  it('should render a heading with a primary line color', () => {
    render(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render a heading with a secondary line color', () => {
    render(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
