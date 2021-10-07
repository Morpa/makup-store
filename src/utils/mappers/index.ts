import { QueryProducts_products_product } from 'graphql/generated/QueryProducts'

export const productsMapper = (products: QueryProducts_products_product[]) => {
  return products
    ? products.map((item) => {
        return {
          id: item.id,
          title: item.name,
          brand: (item.brand?.length && item.brand?.toLocaleUpperCase()) || '',
          img: `https:${item.api_featured_image}`,
          price:
            Number(item.price) > 0
              ? item.price
              : Math.floor(Math.random() * 50),
          rating: Number(item?.rating) > 0 ? Number(item.rating) : Number(0)
        }
      })
    : {}
}

export const bannersMapper = (products: QueryProducts_products_product[]) => {
  return products
    ? products.map((item) => {
        return {
          img: `https:${item.api_featured_image}`,
          title: item.name,
          buttonLabel: 'Buy now',
          buttonLink: `/product/${item.id}`
        }
      })
    : {}
}

export const highlightMapper = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products: any,
  title: string,
  subtitle: string,
  alignment: string
) => {
  return products
    ? products.map((item: QueryProducts_products_product) => {
        return {
          title,
          subtitle,
          backgroundImage: `https:${item.api_featured_image}`,
          buttonLabel: 'Buy now',
          buttonLink: `/product/${item.id}`,
          alignment
        }
      })
    : {}
}
