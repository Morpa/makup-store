import { Story, Meta } from '@storybook/react/types-6-0'

import { ProductCard, ProductCardProps } from '.'

export default {
  title: 'Product/ProductCard',
  component: ProductCard,
  parameters: {
    backgrounds: {
      default: 'makeup-dark'
    }
  },
  args: {
    id: '1',
    title: 'Lippie Pencil',
    brand: 'Colourpop',
    img: 'https://source.unsplash.com/user/morpa/300x140',
    price: '5.0'
  }
} as Meta

export const Default: Story<ProductCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <ProductCard {...args} />
  </div>
)
