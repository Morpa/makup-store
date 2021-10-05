import { NextSeo } from 'next-seo'
import Image from 'next/image'

import { Base } from 'templates/Base'
import { ProductInfo } from 'components/ProductInfo'
import { Gallery, GalleryColorsProps } from 'components/Gallery'
import { TextContent } from 'components/TextContent'
import { ProductCardProps } from 'components/ProductCard'
import { HighlightProps } from 'components/Highlight'
import { ShowCase } from 'components/ShowCase'

import * as S from './styles'

export type ProductTemplateProps = {
  id: string
  cover: string
  description: string
  title: string
  price: string
  upcomingHighlightTitle: string
  upcomingHighlight: HighlightProps
  upcomingProducts: ProductCardProps[]
  gallery: GalleryColorsProps[]
}

export const Product = ({
  id,
  cover,
  title,
  description,
  price,
  upcomingHighlightTitle,
  upcomingHighlight,
  upcomingProducts,
  gallery
}: ProductTemplateProps) => (
  <Base>
    <NextSeo
      title={`${title} - Makeup Store`}
      description={description}
      canonical={`https://makeup-store.vercel.app/product/${id}`}
      openGraph={{
        url: `https://makeup-store.vercel.app/product/${id}`,
        title: `${title} - Makeup Store`,
        description: description,
        images: [
          {
            url: cover,
            alt: `${title}`
          }
        ]
      }}
    />
    <S.Cover>
      <Image
        src={cover}
        alt={`${title}`}
        placeholder="blur"
        blurDataURL={cover}
        layout="fill"
        objectFit="cover"
      />
    </S.Cover>

    <S.Main>
      <S.SectionProductInfo>
        <ProductInfo
          description={description?.substr(0, 100)}
          title={title}
          price={price}
        />
      </S.SectionProductInfo>

      <S.SectionGallery>
        {gallery?.length > 0 && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <ShowCase
        title={upcomingHighlightTitle}
        highlight={upcomingHighlight}
        products={upcomingProducts}
      />
    </S.Main>
  </Base>
)
