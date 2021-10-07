import { Loading } from 'components/Loading'

import { GetServerSidePropsContext } from 'next'
import { api, ProductApiResponse } from 'services/api'

import { ProductsTemplate, ProductsTemplateProps } from 'templates/Products'

import { sortFields, productTypes } from 'utils/filters/fields'
import { productsMapper } from 'utils/homeMappers'

export default function GamesPage(props: ProductsTemplateProps) {
  return <ProductsTemplate {...props} />
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const filterPrice = {
    title: 'Price',
    name: 'price_lte',
    type: 'radio',
    fields: sortFields
  }

  const filterTypes = {
    title: 'Product Types',
    name: 'types',
    type: 'radio',
    fields: productTypes
  }

  const filterItems = [filterPrice, filterTypes]

  const { data: productsToSHow } = await api.get<ProductApiResponse[]>(
    `products.json`
  )

  return {
    props: {
      productsToSHow: productsMapper(productsToSHow.slice(0, 9)),
      filterItems
    }
  }
}
