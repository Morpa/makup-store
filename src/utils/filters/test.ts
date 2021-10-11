import { parseQueryStringToFilter } from '.'

const filterItems = [{ name: 'sort', type: 'radio' }]

const queryString = {
  sort: 'price:asc'
}

describe('parseQueryStringToFilter()', () => {
  it('should parse queryString to filter values format', () => {
    const parsedQuery = parseQueryStringToFilter({ queryString, filterItems })

    expect(parsedQuery).toStrictEqual({
      sort: 'price:asc'
    })
  })
})
