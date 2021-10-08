import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import {
  QueryProductsById,
  QueryProductsByIdVariables
} from 'graphql/generated/QueryProductsById'
import { QUERY_PRODUCTS } from 'graphql/queries/products'
import {
  QueryProducts,
  QueryProductsVariables
} from 'graphql/generated/QueryProducts'
import { QUERY_PRODUCTS_BY_ID } from 'graphql/queries/productById'

import { Product, ProductTemplateProps } from 'templates/Product'
import { initializeApollo } from 'utils/apollo'
import formatPrice from 'utils/format-price'
import { highlightMapper, productsMapper } from 'utils/mappers'

const apolloClient = initializeApollo()

export default function Index(props: ProductTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <Product {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<
    QueryProducts,
    QueryProductsVariables
  >({
    query: QUERY_PRODUCTS,
    variables: { limit: 9 }
  })

  const paths = data.products.product.map(({ id }) => ({
    params: { id }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryProductsById,
    QueryProductsByIdVariables
  >({
    query: QUERY_PRODUCTS_BY_ID,
    variables: { id: Number(params?.id) },
    fetchPolicy: 'no-cache'
  })

  const product = data.productById

  const foundationProductsData = await apolloClient.query<
    QueryProducts,
    QueryProductsVariables
  >({
    query: QUERY_PRODUCTS,
    variables: { limit: 6, offset: 2, productType: 'foundation' },
    fetchPolicy: 'no-cache'
  })

  return {
    revalidate: 60 * 60 * 24, // 1 day
    props: {
      id: product?.id,
      title: product?.name,
      cover: product?.api_featured_image,
      description: product?.description,
      price:
        Number(product?.price) > 0
          ? formatPrice(Number(product?.price))
          : formatPrice(Math.floor(Math.random() * 50)),
      gallery: product?.product_colors?.map((color) => ({
        hexValue: color?.hex_value,
        colourName: color?.colour_name
      })),
      upcomingHighlightTitle: 'You may like these products',
      upcomingProducts: productsMapper(
        foundationProductsData.data.products.product
      ),
      upcomingHighlight: highlightMapper(
        foundationProductsData.data.products.product,
        'Recommended',
        'Hot collection',
        'right'
      )[4]
    }
  }
}
