import axios from 'axios'

type ProductColors = {
  hex_value: string
  colour_name: string
}

export type ProductApiResponse = {
  id: number
  brand: string
  name: string
  price: string
  image_link: string
  product_link: string
  description: string
  rating?: string
  category: string
  product_type: string
  tag_list: string[]
  product_api_url: string
  api_featured_image: string
  product_colors: ProductColors[]
}

export const api = axios.create({
  baseURL: 'http://makeup-api.herokuapp.com/api/v1/'
})
