import { GetStaticProps } from 'next'
import { api, ProductApiResponse } from 'services/api'
import { Product, ProductTemplateProps } from 'templates/Product'
import formatPrice from 'utils/format-price'
import { highlightMapper, productsMapper } from 'utils/homeMappers'

export default function Index(props: ProductTemplateProps) {
  return <Product {...props} />
}

export async function getStaticPaths() {
  const { data: ProductsData } = await api.get<ProductApiResponse[]>(
    'products.json'
  )

  const convertedIds = ProductsData.map((product) => ({
    ...product,
    id: product.id.toString()
  }))

  const paths = convertedIds.slice(0, 9).map(({ id }) => ({ params: { id } }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await api.get<ProductApiResponse>(
    `/products/${params?.id}.json`
  )

  const { data: foundationProductsData } = await api.get<ProductApiResponse[]>(
    '/products.json?product_type=foundation'
  )

  return {
    revalidate: 60 * 60 * 24, // 1 day
    props: {
      id: data.id.toString(),
      title: data.name,
      cover: `https:${data.api_featured_image}`,
      description: data.description,
      price:
        Number(data.price) > 0
          ? formatPrice(Number(data.price))
          : formatPrice(Math.floor(Math.random() * 50)),
      gallery: data.product_colors.map((color) => ({
        hexValue: color.hex_value,
        colourName: color.colour_name
      })),
      upcomingHighlightTitle: 'You may like these products',
      upcomingProducts: productsMapper(foundationProductsData.slice(1, 6)),
      upcomingHighlight: highlightMapper(
        foundationProductsData.slice(),
        'Upcoming',
        'New collection',
        'left'
      )[0]
    }
  }
}
