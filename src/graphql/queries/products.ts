import { gql, QueryHookOptions, useQuery } from '@apollo/client'

import { ProductFragment } from 'graphql/fragments/product'
import {
  QueryProducts,
  QueryProductsVariables
} from 'graphql/generated/QueryProducts'

export const QUERY_PRODUCTS = gql`
  query QueryProducts($limit: Int, $offset: Int, $productType: String) {
    products(
      query: {
        limit: $limit
        offset: $offset
        filter: { product_type: $productType }
      }
    ) {
      product {
        ...ProductFragment
      }
    }
  }
  ${ProductFragment}
`
export function useQueryProducts(
  options?: QueryHookOptions<QueryProducts, QueryProductsVariables>
) {
  return useQuery<QueryProducts, QueryProductsVariables>(
    QUERY_PRODUCTS,
    options
  )
}
