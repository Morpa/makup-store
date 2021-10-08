import { gql } from '@apollo/client'

import { ProductFragment } from 'graphql/fragments/product'

export const QUERY_PRODUCTS_BY_ID = gql`
  query QueryProductsById($id: Int!) {
    productById(id: $id) {
      ...ProductFragment
      description
      api_featured_image
      product_colors {
        hex_value
        colour_name
      }
    }
  }
  ${ProductFragment}
`
