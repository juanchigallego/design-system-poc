import React from "react";

import { Card, Button } from "../../components/src";

export default {
  title: "Card",
  component: Card,
};

export const Default = () => 
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
;
