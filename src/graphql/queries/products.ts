import { gql, QueryHookOptions, useQuery } from '@apollo/client'

import { ProductFragment } from 'graphql/fragments/product'
import {
  QueryProducts,
  QueryProductsVariables
} from 'graphql/generated/QueryProducts'

export const QUERY_PRODUCTS = gql`
  query QueryProducts(
    $limit: Int
    $offset: Int
    $productType: String
    $order: String
    $orderField: String
  ) {
    products(
      query: {
        limit: $limit
        offset: $offset
        filter: { product_type: $productType }
        order: $order
        orderField: $orderField
      }
    ) {
      product {
        ...ProductFragment
      }
      count
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
