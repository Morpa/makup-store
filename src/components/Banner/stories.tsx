import { Story, Meta } from '@storybook/react/types-6-0'
import { Banner, BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/morpa/1040x580',
    title: 'Ultra HD Face Essentials Palette',
    buttonLabel: 'Buy now',
    buttonLink: '/products/essentials-palette'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)
