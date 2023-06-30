import {Meta, StoryObj} from '@storybook/react';

import Button from "./Button.tsx";
import {userEvent, within} from "@storybook/testing-library";

const meta = {
  title: 'Common/Button',
  component: Button,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
        <div style={{margin: '3em'}}>
          <Story/>
        </div>
    ),
  ],
  argTypes: {
    size: {
      options: ['sm', 'base', 'lg'],
      control: {type: 'select'},
    }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default',
  }
}

export const Primary: Story = {
  args: {
    children: 'Primary',
    color: 'primary',
  }
}

export const Danger: Story = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
  },
  render: (args) => <Button {...args}>{args.children}</Button>,
  args: {
    children: 'Danger',
    color: 'danger',
    onClick: () => alert('click')
  }
}

export const PrimarySmall: Story = {
  args: {
    children: 'Primary',
    color: 'primary',
    size: 'sm',
  },
};

export const PrimaryLarge: Story = {
  args: {
    children: 'Primary',
    color: 'primary',
    size: 'lg',
  }
}

export const DangerSmall: Story = {
  args: {
    ...Danger.args,
    size: 'sm',
  }
}

export const DangerLarge: Story = {
  args: {
    ...Danger.args,
    size: 'lg',
  }
}