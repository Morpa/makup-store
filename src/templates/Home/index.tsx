import { Base } from 'templates/Base'
import { BannerProps } from 'components/Banner'
import { ProductCardProps } from 'components/ProductCard'
import { HighlightProps } from 'components/Highlight'
import { Container } from 'components/Container'
import { BannerSlider } from 'components/BannerSlider'
import { ShowCase } from 'components/ShowCase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  blushProducts: ProductCardProps[]
  blushTitle: string
  eyeshadowProducts: ProductCardProps[]
  eyeShadowTitle: string
  lipstickProducts: ProductCardProps[]
  lipstickTitle: string
  foundationProducts: ProductCardProps[]
  foudationTitle: string
  mostPopularHighlight: HighlightProps
  upcomingHighlight: HighlightProps
  recommendedHighlight: HighlightProps
}

export const Home = ({
  banners,
  blushProducts,
  blushTitle,
  eyeshadowProducts,
  eyeShadowTitle,
  lipstickProducts,
  lipstickTitle,
  foundationProducts,
  foudationTitle,
  mostPopularHighlight,
  upcomingHighlight,
  recommendedHighlight
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <ShowCase title={blushTitle} products={blushProducts} color="black" />
    </S.SectionNews>

    <ShowCase
      title={eyeShadowTitle}
      highlight={mostPopularHighlight}
      products={eyeshadowProducts}
    />

    <ShowCase
      title={lipstickTitle}
      products={lipstickProducts}
      highlight={upcomingHighlight}
    />

    <ShowCase
      title={foudationTitle}
      highlight={recommendedHighlight}
      products={foundationProducts}
    />
  </Base>
)
