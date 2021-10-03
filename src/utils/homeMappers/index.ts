import { ProductApiResponse } from 'services/api'

export const productsMapper = (products: ProductApiResponse[]) => {
  return products
    ? products.map((item) => {
        return {
          id: item.id,
          title: item.name,
          brand: item.brand?.toLocaleUpperCase(),
          img: `http:${item.api_featured_image}`,
          price:
            Number(item.price) > 0 ? item.price : Math.floor(Math.random() * 50)
        }
      })
    : {}
}

export const bannersMapper = (products: ProductApiResponse[]) => {
  return products
    ? products.map((item) => {
        return {
          img: `http:${item.api_featured_image}`,
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
    ? products.map((item: ProductApiResponse) => {
        return {
          title,
          subtitle,
          backgroundImage: `http:${item.api_featured_image}`,
          buttonLabel: 'Buy now',
          buttonLink: `/product/${item.id}`,
          alignment
        }
      })
    : {}
}
