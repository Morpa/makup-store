import { Story, Meta } from '@storybook/react/types-6-0'
import { Save } from '@styled-icons/material-outlined/Save'

import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Save'
}

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Save',
  icon: <Save />
}

export const asLink: Story = (args) => <Button {...args} />
asLink.args = {
  size: 'large',
  children: 'Save',
  as: 'a',
  href: 'link'
}
