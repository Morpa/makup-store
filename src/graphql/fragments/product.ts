import { gql } from '@apollo/client'

export const ProductFragment = gql`
  fragment ProductFragment on Product {
    id
    name
    brand
    price
    rating
    api_featured_image
  }
`
