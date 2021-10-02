import { Story, Meta } from '@storybook/react/types-6-0'
import { ShowCase, ShowCaseProps } from '.'
import highlightMock from 'components/Highlight/mock'
import productsMock from 'components/ProductCardSlider/mock'

export default {
  title: 'ShowCase',
  component: ShowCase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'makeup-dark'
    }
  }
} as Meta

export const Default: Story<ShowCaseProps> = (args) => <ShowCase {...args} />

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  products: productsMock
}

export const WithoutHighlight: Story<ShowCaseProps> = (args) => (
  <ShowCase {...args} />
)

WithoutHighlight.args = {
  title: 'Most Popular',
  products: productsMock
}

export const WithoutGames: Story<ShowCaseProps> = (args) => (
  <ShowCase {...args} />
)

WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock
}
