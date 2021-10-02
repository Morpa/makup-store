import { Heading } from 'components/Heading'
import { ProductCardSlider } from 'components/ProductCardSlider'
import { ProductCardProps } from 'components/ProductCard'

import * as S from './styles'

export type ShowCaseProps = {
  title?: string
  products?: ProductCardProps[]
  color?: 'black' | 'white'
}

export const ShowCase = ({
  title,
  products,
  color = 'white'
}: ShowCaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    {!!products && <ProductCardSlider items={products} color={color} />}
  </S.Wrapper>
)
