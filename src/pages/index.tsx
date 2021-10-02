import { Home, HomeTemplateProps } from 'templates/Home'

import bannerMock from 'components/BannerSlider/mock'
import productsMock from 'components/ProductCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  return {
    revalidate: 10,
    props: {
      banners: bannerMock,
      blushProducts: productsMock,
      blushTitle: 'New Blushs',
      eyeshadowProducts: productsMock,
      eyeShadowTitle: 'Eyeshadow',
      lipstickProducts: productsMock,
      lipstickTitle: 'Hots Lipsticks',
      nailpolishProducts: productsMock,
      nailPolishTitle: 'Nail Polish',
      mostPopularHighlight: highlightMock,
      upcomingHighlight: highlightMock,
      recommendedHighlight: highlightMock
    }
  }
}
