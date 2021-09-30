import { render, screen } from 'utils/test-utils'

import { Heading } from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    render(<Heading>Movies Explorer</Heading>)
    expect(
      screen.getByRole('heading', { name: /movies explorer/i })
    ).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading when color is passed', () => {
    render(<Heading color="black">Movies Explorer</Heading>)
    expect(
      screen.getByRole('heading', { name: /movies explorer/i })
    ).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading whith a line to the left side', () => {
    render(<Heading lineLeft>Movies Explorer</Heading>)
    expect(
      screen.getByRole('heading', { name: /movies explorer/i })
    ).toHaveStyle({
      'border-left': '0.7rem solid #00359d'
    })
  })

  it('should render a heading whith a line at the bottom', () => {
    render(<Heading lineBottom>Movies Explorer</Heading>)
    expect(
      screen.getByRole('heading', { name: /movies explorer/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #00359d', {
      modifier: '::after'
    })
  })

  it('should render a heading with a huge size', () => {
    render(<Heading size="huge">Movies Explorer</Heading>)

    expect(
      screen.getByRole('heading', { name: /movies explorer/i })
    ).toHaveStyle({
      'font-size': '5.2rem'
    })
  })

  it('should render a heading whith a small size', () => {
    render(<Heading size="small">Movies Explorer</Heading>)
    expect(
      screen.getByRole('heading', { name: /movies explorer/i })
    ).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(
      screen.getByRole('heading', { name: /movies explorer/i })
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
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #00359d' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #00359d', {
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
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #D6AE2F' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #D6AE2F', {
      modifier: '::after'
    })
  })
})
