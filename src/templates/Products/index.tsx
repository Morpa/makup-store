import { useState } from 'react'
import { useRouter } from 'next/router'
import { ParsedUrlQueryInput } from 'querystring'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import { useQueryProducts } from 'graphql/queries/products'

import { Base } from 'templates/Base'

import { ExploreSidebar, ItemProps } from 'components/ExploreSidebar'
import { ProductCard } from 'components/ProductCard'
import { Grid } from 'components/Grid'
import { Loading } from 'components/Loading'
import { parseQueryStringToFilter } from 'utils/filters'

import * as S from './styles'

export type ProductsTemplateProps = {
  filterItems: ItemProps[]
}

export const ProductsTemplate = ({ filterItems }: ProductsTemplateProps) => {
  const [newPerPage, setNewPerPage] = useState(9)

  const { push, query } = useRouter()

  const { data, loading, fetchMore } = useQueryProducts({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: newPerPage,
      orderField: 'price',
      productType: query.productType as string | null,
      order: query.sortFields as string | null
    }
  })

  if (!data) return <Loading />

  const hasMoreProducts = data.products.product.length < data.products.count

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/products',
      query: items
    })
    return
  }

  const handleShowMore = () => {
    setNewPerPage(newPerPage + 9)

    fetchMore({
      variables: { limit: newPerPage }
    })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />

        <section>
          <Grid>
            {data?.products?.product?.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id.toString()}
                title={product.name}
                brand={product.brand}
                price={product.price}
                rating={product.rating}
                img={product.api_featured_image}
              />
            ))}
          </Grid>

          {hasMoreProducts && (
            <S.ShowMore>
              {loading ? (
                <Loading />
              ) : (
                <S.ShowMoreButton role="button" onClick={handleShowMore}>
                  <p>Show More</p>
                  <ArrowDown size={35} />
                </S.ShowMoreButton>
              )}
            </S.ShowMore>
          )}
        </section>
      </S.Main>
    </Base>
  )
}
