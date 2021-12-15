import React from "react";

import { Card, Button, Text } from "@juanchigallego/components/src";

export default {
  title: "Card",
  component: Card,
};

export const Default = () => 
  <Card>
    <Card.Header title="Card title" />
    <Card.Body>
      <Text>Card Content</Text>
      <Text>Several</Text>
      <Text>Elements</Text>
    </Card.Body>
    <Card.Footer>
      <Button>Button</Button>
      <Button appearance="primary">Button primary</Button>
    </Card.Footer>
  </Card>
;
