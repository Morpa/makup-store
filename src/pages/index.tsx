import { Home, HomeTemplateProps } from 'templates/Home'

import { api, ProductApiResponse } from 'services/api'
import {
  bannersMapper,
  highlightMapper,
  productsMapper
} from 'utils/homeMappers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const { data: blushProductsData } = await api.get<ProductApiResponse[]>(
    '/products.json?product_type=blush'
  )

  const { data: eyeshadowProductsData } = await api.get<ProductApiResponse[]>(
    '/products.json?product_type=eyeshadow'
  )

  const { data: lipstickProductsData } = await api.get<ProductApiResponse[]>(
    '/products.json?product_type=lipstick'
  )

  const { data: nailpolishProductsData } = await api.get<ProductApiResponse[]>(
    '/products.json?product_type=nail_polish'
  )

  const { data: mascaraProductsData } = await api.get<ProductApiResponse[]>(
    '/products.json?product_type=mascara'
  )

  return {
    revalidate: 60 * 60 * 24, // 1 day
    props: {
      banners: bannersMapper(mascaraProductsData.slice(0, 3)),
      blushProducts: productsMapper(blushProductsData.slice(1, 7)),
      blushTitle: 'New Blushs',
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
      )[0]
    }
  }
}
