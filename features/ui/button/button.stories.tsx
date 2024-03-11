import type { Meta, StoryObj } from "@storybook/react";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import { Button, ButtonSize, ButtonColor } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    color: { control: "radio", options: ButtonColor },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Button CTA", color: ButtonColor.Primary, disabled: false },
};

export const Small: Story = {
  args: { ...Default.args, size: ButtonSize.Small },
};

export const Medium: Story = {
  args: { ...Default.args, size: ButtonSize.Medium },
};

export const Large: Story = {
  args: { ...Default.args, size: ButtonSize.Large },
};

export const XLarge: Story = {
  args: { ...Default.args, size: ButtonSize.XLarge },
};
