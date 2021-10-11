import { QUERY_PRODUCTS } from 'graphql/queries/products'

export const productsMock = {
  request: {
    query: QUERY_PRODUCTS,
    variables: {
      limit: 9,
      orderField: 'price'
    }
  },
  result: {
    data: {
      products: {
        product: [
          {
            id: '1048',
            name: 'Sample Product',
            brand: 'Brand',
            price: '5.0',
            rating: null,
            api_featured_image: 'https://s3.amazonaws.com/donovanbailey',
            __typename: 'Product'
          }
        ],
        count: 891
      }
    }
  }
}

export const fetchMoreMock = {
  request: {
    query: QUERY_PRODUCTS,
    variables: {
      limit: 9,
      orderField: 'price'
    }
  },
  result: {
    data: {
      products: {
        product: [
          {
            id: '1042',
            name: 'Fetch More Product',
            brand: 'Wow',
            price: '5.0',
            rating: null,
            api_featured_image: 'https://s3.amazonaws.com/donovanbailey',
            __typename: 'Product'
          }
        ],
        count: 891
      }
    }
  }
}
