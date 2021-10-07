import { Home, HomeTemplateProps } from 'templates/Home'

import { api, ProductApiResponse } from 'services/api'
import { bannersMapper, highlightMapper, productsMapper } from 'utils/mappers'
import { initializeApollo } from 'utils/apollo'
import { QUERY_PRODUCTS } from 'graphql/queries/products'
import {
  QueryProducts,
  QueryProductsVariables
} from 'graphql/generated/QueryProducts'

export default function Index(props: HomeTemplateProps) {
  return <div>oi</div>
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

  const { data: eyeshadowProductsData } = await apolloClient.query<
    QueryProducts,
    QueryProductsVariables
  >({
    query: QUERY_PRODUCTS,
    variables: { limit: 6, offset: 4, productType: 'eyeshadow' },
    fetchPolicy: 'no-cache'
  })

  const { data: foundationProductsData } = await apolloClient.query<
    QueryProducts,
    QueryProductsVariables
  >({
    query: QUERY_PRODUCTS,
    variables: { limit: 6, offset: 4, productType: 'foundation' },
    fetchPolicy: 'no-cache'
  })

  const { data: liplinerProductsData } = await apolloClient.query<
    QueryProducts,
    QueryProductsVariables
  >({
    query: QUERY_PRODUCTS,
    variables: { limit: 6, offset: 4, productType: 'lip_liner' },
    fetchPolicy: 'no-cache'
  })

  const { data: mascaraProductsData } = await apolloClient.query<
    QueryProducts,
    QueryProductsVariables
  >({
    query: QUERY_PRODUCTS,
    variables: { limit: 6, offset: 4, productType: 'mascara' },
    fetchPolicy: 'no-cache'
  })

  const { data: nailPolishProductsData } = await apolloClient.query<
    QueryProducts,
    QueryProductsVariables
  >({
    query: QUERY_PRODUCTS,
    variables: { limit: 6, offset: 4, productType: 'nail_polish' },
    fetchPolicy: 'no-cache'
  })

  const { data: lipstickProductsData } = await apolloClient.query<
    QueryProducts,
    QueryProductsVariables
  >({
    query: QUERY_PRODUCTS,
    variables: { limit: 6, offset: 4, productType: 'Lipstick' },
    fetchPolicy: 'no-cache'
  })

  return {
    revalidate: 60 * 60 * 24, // 1 day
    props: {
      initialApolloState: apolloClient.cache.extract(),
      blushProducts: productsMapper(blushProductsData.data.products.product),
      blushTitle: 'New Blushs'
      /*
      banners: bannersMapper(mascaraProductsData.slice(0, 3)),

      eyeshadowProducts: productsMapper(eyeshadowProductsData.slice(0, 6)),
      eyeShadowTitle: 'Eyeshadow',
      lipstickProducts: productsMapper(lipstickProductsData.slice(0, 6)),
      lipstickTitle: 'Hots Lipsticks',
      nailpolishProducts: productsMapper(nailpolishProductsData.slice(0, 6)),
      nailPolishTitle: 'Nail Polish',
      mostPopularHighlight: highlightMapper(
        eyeshadowProductsData.slice(),
        'New collection',
        'Most Popular',
        'right'
      )[0],
      upcomingHighlight: highlightMapper(
        lipstickProductsData.slice(),
        'Upcoming',
        'New collection',
        'left'
      )[0],
      recommendedHighlight: highlightMapper(
        nailpolishProductsData.slice(),
        'Recommended',
        'Hot collection',
        'right'
      )[0] */
    }
  }
}
