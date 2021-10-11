import userEvent from '@testing-library/user-event'
import { MockedProvider } from '@apollo/client/testing'

import { render, screen } from 'utils/test-utils'
import apolloCache from 'utils/apolloCache'

import filterItemsMock from 'components/ExploreSidebar/mock'
import { fetchMoreMock, productsMock } from './mocks'

import { ProductsTemplate } from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/',
  prefetch: jest.fn().mockResolvedValue(undefined)
}))

jest.mock('next/link', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
  }
}))

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    Base: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Base">{children}</div>
    }
  }
})

describe('<Products />', () => {
  it('should render loading when starting the template', () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ProductsTemplate filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
  })

  it('should render sections', async () => {
    render(
      <MockedProvider mocks={[productsMock]} addTypename={false}>
        <ProductsTemplate filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument()

    expect(await screen.findByText(/Filter/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render more products when show more is clicked', async () => {
    render(
      <MockedProvider mocks={[productsMock, fetchMoreMock]} cache={apolloCache}>
        <ProductsTemplate filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await screen.findByText(/Sample Product/i)).toBeInTheDocument()

    userEvent.click(await screen.findByRole('button', { name: /show more/i }))

    expect(await screen.findByText(/Fetch More Product/i)).toBeInTheDocument()
  })
})
