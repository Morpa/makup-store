import { GetServerSidePropsContext } from 'next'

import { initializeApollo } from 'utils/apollo'
import { QUERY_PRODUCTS } from 'graphql/queries/products'
import {
  QueryProducts,
  QueryProductsVariables
} from 'graphql/generated/QueryProducts'
import { sortFields, productTypes } from 'utils/filters/fields'

import { ProductsTemplate, ProductsTemplateProps } from 'templates/Products'

export default function ProductsPage(props: ProductsTemplateProps) {
  return <ProductsTemplate {...props} />
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()

  const filterPrice = {
    title: 'Order by name',
    name: 'sortFields',
    type: 'radio',
    fields: sortFields
  }

  const filterTypes = {
    title: 'Product Types',
    name: 'productType',
    type: 'radio',
    fields: productTypes
  }

  const filterItems = [filterPrice, filterTypes]

  await apolloClient.query<QueryProducts, QueryProductsVariables>({
    query: QUERY_PRODUCTS,
    variables: {
      limit: 9,
      productType: query.productType as string | null,
      order: (query.sortFields as string | null)?.split(':', 2)[0],
      orderField: (query.sortFields as string | null)?.split(':', 2)[1]
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems
    }
  }
}
