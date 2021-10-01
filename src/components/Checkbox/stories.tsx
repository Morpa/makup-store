import { Story, Meta } from '@storybook/react/types-6-0'

import { Checkbox, CheckboxProps } from '.'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'makeup-dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        name="category"
        label="Vegan"
        labelFor="vegan"
        isChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox name="category" label="Organic" labelFor="organic" {...args} />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox name="category" label="Natural" labelFor="natural" {...args} />
    </div>
  </>
)
