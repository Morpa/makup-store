import { QueryProducts_products_product } from 'graphql/generated/QueryProducts'
import { bannersMapper, highlightMapper, productsMapper } from '.'

describe('productsMapper', () => {
  it('should return the right format when product is mapped', () => {
    const product = [
      {
        id: '1',
        brand: 'brand',
        name: 'name',
        price: '5',
        rating: '5',
        api_featured_image: '//api_featured_image'
      }
    ] as QueryProducts_products_product[]

    expect(productsMapper(product)).toStrictEqual([
      {
        id: '1',
        title: 'name',
        brand: 'BRAND',
        img: '//api_featured_image',
        price: '5',
        rating: 5
      }
    ])
  })

  it('should return an empty array if there are no products', () => {
    expect(productsMapper([])).toStrictEqual([])
  })
})

describe('bannersMapper', () => {
  it('should return the right format when banners is mapped', () => {
    const product = [
      {
        id: '1',
        brand: 'brand',
        name: 'name',
        price: '5',
        rating: 'rating',
        api_featured_image: '//api_featured_image'
      }
    ] as QueryProducts_products_product[]

    expect(bannersMapper(product)).toStrictEqual([
      {
        title: 'name',
        img: '//api_featured_image',
        buttonLabel: 'Buy now',
        buttonLink: '/product/1'
      }
    ])
  })

  it('should return an empty array if there are no products', () => {
    expect(productsMapper([])).toStrictEqual([])
  })
})

describe('highlightMapper', () => {
  it('should return the right format when highlightMapper is mapped', () => {
    const product = [
      {
        id: '1',
        brand: 'brand',
        name: 'name',
        price: '5',
        rating: 'rating',
        api_featured_image: '//api_featured_image'
      }
    ] as QueryProducts_products_product[]

    expect(
      highlightMapper(product, 'Upcoming', 'New collection', 'left')
    ).toStrictEqual([
      {
        title: 'Upcoming',
        subtitle: 'New collection',
        backgroundImage: '//api_featured_image',
        buttonLabel: 'Buy now',
        buttonLink: '/product/1',
        alignment: 'left'
      }
    ])
  })

  it('should return an empty array if there are no products', () => {
    expect(productsMapper([])).toStrictEqual([])
  })
})
