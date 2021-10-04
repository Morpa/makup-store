import 'match-media-mock'

import { render, screen, fireEvent } from 'utils/test-utils'

import { Gallery } from '.'
import mockItems from './mock'

describe('<Galery />', () => {
  it('should render cards as buttons', () => {
    render(<Gallery items={mockItems.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: mockItems[0].colourName })
    ).toBeInTheDocument()
  })

  it('should handle open modal', () => {
    render(<Gallery items={mockItems.slice(0, 2)} />)

    // selecionar o modal
    const modal = screen.getByLabelText('modal')

    // verificar se o modal tá escondido
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    fireEvent.click(
      screen.getByRole('button', { name: mockItems[0].colourName })
    )
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should open modal with selected color', () => {
    render(<Gallery items={mockItems.slice(0, 2)} />)

    fireEvent.click(
      screen.getByRole('button', { name: mockItems[1].colourName })
    )

    const div = screen.getByLabelText(mockItems[1].colourName)

    expect(div.parentElement?.parentElement).toHaveClass('slick-active')
  })

  it('should handle close modal when overlay or button is clicked', () => {
    render(<Gallery items={mockItems.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    fireEvent.click(
      screen.getByRole('button', { name: mockItems[0].colourName })
    )

    fireEvent.click(screen.getByRole('button', { name: /close modal/i }))

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should handle close modal when ESC button is pressed', () => {
    const { container } = render(<Gallery items={mockItems.slice(0, 2)} />)

    const modal = screen.getByLabelText('modal')

    fireEvent.click(
      screen.getByRole('button', { name: mockItems[0].colourName })
    )

    fireEvent.keyUp(container, { key: 'Escape' })

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })
})
