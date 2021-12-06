import React from "react";

import { Card, Button, Stack } from "../../components/src";

export default {
  title: "Stack",
  component: Stack,
  argTypes: {
    spacing: { control: "select" },
    mode: { control: "select" },
    wrap: { control: "boolean" }
  }
};

const DemoCard = () => {
  return (
    <Card>
      <Card.Header title="Card title" />
      <Card.Body>
        <p>Card Content</p>
        <p>Several</p>
        <p>Elements</p>
      </Card.Body>
      <Card.Footer>
        <Button>Button</Button>
        <Button appearance="primary">Button primary</Button>
      </Card.Footer>
    </Card>
  )
}

const repeatingCards: JSX.Element[] = [];
for (let i = 1; i <= 10; i++) {
  repeatingCards.push(<DemoCard key={i} />);
}

const Template = (args) =>
  <Stack {...args}> 
    {repeatingCards}
  </Stack>
;

export const Default = Template.bind({});
Default.args = {
  spacing: "base",
  mode: "horizontal",
  wrap: false,
}
