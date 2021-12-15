import React from "react";

import { Button } from "@juanchigallego/components/src";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    appearance: { control: "select" },
    children: { control: "text" }
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  appearance: "primary",
  children: "Button",
};
