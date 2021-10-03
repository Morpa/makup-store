import { ProductApiResponse } from 'services/api'
import { bannersMapper, highlightMapper, productsMapper } from '.'

describe('productsMapper', () => {
  it('should return the right format when product is mapped', () => {
    const product = [
      {
        id: 1,
        brand: 'brand',
        name: 'name',
        price: '5',
        image_link: 'image_link',
        product_link: 'product_link',
        description: 'description',
        rating: 'rating',
        category: 'category',
        product_type: 'product_type',
        tag_list: [],
        product_api_url: 'product_api_url',
        api_featured_image: '//api_featured_image',
        product_colors: []
      }
    ] as ProductApiResponse[]

    expect(productsMapper(product)).toStrictEqual([
      {
        id: 1,
        title: 'name',
        brand: 'BRAND',
        img: 'http://api_featured_image',
        price: '5'
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
        id: 1,
        brand: 'brand',
        name: 'name',
        price: '5',
        image_link: 'image_link',
        product_link: 'product_link',
        description: 'description',
        rating: 'rating',
        category: 'category',
        product_type: 'product_type',
        tag_list: [],
        product_api_url: 'product_api_url',
        api_featured_image: '//api_featured_image',
        product_colors: []
      }
    ] as ProductApiResponse[]

    expect(bannersMapper(product)).toStrictEqual([
      {
        title: 'name',
        img: 'http://api_featured_image',
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
        id: 1,
        brand: 'brand',
        name: 'name',
        price: '5',
        image_link: 'image_link',
        product_link: 'product_link',
        description: 'description',
        rating: 'rating',
        category: 'category',
        product_type: 'product_type',
        tag_list: [],
        product_api_url: 'product_api_url',
        api_featured_image: '//api_featured_image',
        product_colors: []
      }
    ] as ProductApiResponse[]

    expect(
      highlightMapper(product, 'Upcoming', 'New collection', 'left')
    ).toStrictEqual([
      {
        title: 'Upcoming',
        subtitle: 'New collection',
        backgroundImage: 'http://api_featured_image',
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
