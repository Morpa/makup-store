import { render, screen, fireEvent } from 'utils/test-utils'

import { Menu } from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  query: {}
}))

describe('<Menu />', () => {
  it('should render the menu', () => {
    render(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /movies explorer/i })
    ).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    render(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')

    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/open menu/i))

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')

    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByLabelText(/close menu/i))

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')

    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })
})
