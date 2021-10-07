import { useRouter } from 'next/router'
import { ParsedUrlQueryInput } from 'querystring'

import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import { parseQueryStringToFilter } from 'utils/filters'

import { Base } from 'templates/Base'

import { ExploreSidebar, ItemProps } from 'components/ExploreSidebar'
import { ProductCard } from 'components/ProductCard'
import { Grid } from 'components/Grid'
import { Loading } from 'components/Loading'
/* import Empty from 'components/Empty' */

import * as S from './styles'
import { ProductApiResponse } from 'services/api'
import { productsMapper } from 'utils/homeMappers'

export type ProductsTemplateProps = {
  filterItems: ItemProps[]
  productsToSHow: ProductApiResponse[]
}

export const ProductsTemplate = ({
  filterItems,
  productsToSHow
}: ProductsTemplateProps) => {
  const { push, query } = useRouter()

  if (!productsToSHow) return <Loading />

  /* const { games, gamesConnection } = data

  const hasMoreGames = games.length < (gamesConnection?.values?.length || 0) */

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/products',
      query: items
    })
    return
  }

  /* const handleShowMore = () => {
    fetchMore({ variables: { limit: 15, start: data?.games.length } })
  } */

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
          {productsToSHow.length ? (
            <Grid>
              {/*  {productsToSHow.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id.toString()}
                  title={product.name}
                  brand={product.brand}
                  price={product.price}
                  rating={Number(product.rating)}
                  img={product.api_featured_image}
                />
              ))} */}
              <div>oi</div>
            </Grid>
          ) : (
            <div>NOK</div>
          )}
        </section>
      </S.Main>
    </Base>
  )
}
