import { Home, HomeTemplateProps } from 'templates/Home'

import { bannersMapper, highlightMapper, productsMapper } from 'utils/mappers'
import { initializeApollo } from 'utils/apollo'
import { QUERY_PRODUCTS } from 'graphql/queries/products'
import {
  QueryProducts,
  QueryProductsVariables
} from 'graphql/generated/QueryProducts'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const blushProductsData = await apolloClient.query<
    QueryProducts,
    QueryProductsVariables
  >({
    query: QUERY_PRODUCTS,
    variables: { limit: 6, offset: 4, productType: 'blush' },
    fetchPolicy: 'no-cache'
  })

  const eyeshadowProductsData = await apolloClient.query<
    QueryProducts,
    QueryProductsVariables
  >({
    query: QUERY_PRODUCTS,
    variables: { limit: 6, offset: 1, productType: 'eyeshadow' },
    fetchPolicy: 'no-cache'
  })

  const bronzerProductsData = await apolloClient.query<
    QueryProducts,
    QueryProductsVariables
  >({
    query: QUERY_PRODUCTS,
    variables: { limit: 3, offset: 2, productType: 'bronzer' },
    fetchPolicy: 'no-cache'
  })

  const foundationProductsData = await apolloClient.query<
    QueryProducts,
    QueryProductsVariables
  >({
    query: QUERY_PRODUCTS,
    variables: { limit: 6, offset: 4, productType: 'foundation' },
    fetchPolicy: 'no-cache'
  })

  const lipstickProductsData = await apolloClient.query<
    QueryProducts,
    QueryProductsVariables
  >({
    query: QUERY_PRODUCTS,
    variables: { limit: 6, offset: 4, productType: 'lipstick' },
    fetchPolicy: 'no-cache'
  })

  return {
    revalidate: 60 * 60 * 24, // 1 day
    props: {
      initialApolloState: apolloClient.cache.extract(),
      blushTitle: 'New Blushs',
      blushProducts: productsMapper(blushProductsData.data.products.product),
      eyeShadowTitle: 'Eyeshadow',
      eyeshadowProducts: productsMapper(
        eyeshadowProductsData.data.products.product
      ),
      foundationTitle: 'Foundation',
      foundationProducts: productsMapper(
        foundationProductsData.data.products.product
      ),
      lipstickTitle: 'Hots Lipsticks',
      lipstickProducts: productsMapper(
        lipstickProductsData.data.products.product
      ),
      mostPopularHighlight: highlightMapper(
        eyeshadowProductsData.data.products.product,
        'New collection',
        'Most Popular',
        'right'
      )[0],
      upcomingHighlight: highlightMapper(
        lipstickProductsData.data.products.product,
        'Upcoming',
        'New collection',
        'left'
      )[5],
      recommendedHighlight: highlightMapper(
        foundationProductsData.data.products.product,
        'Recommended',
        'Hot collection',
        'right'
      )[0],
      banners: bannersMapper(bronzerProductsData.data.products.product)
    }
  }
}
