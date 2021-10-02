import { Heading } from 'components/Heading'
import { ProductCardSlider } from 'components/ProductCardSlider'
import { Highlight, HighlightProps } from 'components/Highlight'
import { ProductCardProps } from 'components/ProductCard'

import * as S from './styles'

export type ShowCaseProps = {
  title?: string
  highlight?: HighlightProps
  products?: ProductCardProps[]
  color?: 'black' | 'white'
}

export const ShowCase = ({
  title,
  highlight,
  products,
  color = 'white'
}: ShowCaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    {!!highlight && <Highlight {...highlight} />}
    {!!products && <ProductCardSlider items={products} color={color} />}
  </S.Wrapper>
)
