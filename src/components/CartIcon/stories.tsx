import { Story, Meta } from '@storybook/react/types-6-0'
import { CartIcon } from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'makeup-dark'
    }
  }
} as Meta

export const Default: Story = (args) => <CartIcon {...args} />
Default.args = {
  quantity: 5
}
