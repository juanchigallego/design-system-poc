import React from "react";

import { Card, Button, Stack, Text } from "@juanchigallego/components/src";

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
        <Text lineHeight="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in urna dapibus, luctus ante non, lacinia lectus. Fusce tempus fringilla.
        </Text>
        <Stack>
          <Stack.Item fill><Text appearance="primary" bold>Fill</Text></Stack.Item>
          <Stack.Item><Text appearance="primary">No fill</Text></Stack.Item>
        </Stack>
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
