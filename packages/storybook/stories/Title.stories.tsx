import React from "react";

import { Title } from "@juanchigallego/components/src";

export default {
  title: "Title",
  component: Title,
  argTypes: {
    type: { control: "select" },
    children: { control: "text" }
  },
};

const Template = (args) => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "h1",
  children: "Title text",
};
