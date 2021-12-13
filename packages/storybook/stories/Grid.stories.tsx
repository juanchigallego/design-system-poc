import React from 'react';
import useState from 'storybook-addon-state';

import { Button, Grid, Stack, Text } from "../../components/src";

import { color } from "../../tokens/build/js/tokens";

export default {
  title: "Grid",
  component: Grid,
  argTypes: {
    fluid: { control: "boolean" },
    sm: { control: "number" },
    md: { control: "number" },
    lg: { control: "number" },
    spacing: { control: "select", options: ["base", "tight", "loose", "none"] }
  }
};

type DemoProps = {
  label: React.ReactText;
  labelSecondary?: React.ReactText;
  labelTertiary?: React.ReactText;
}

const DemoContent = ({ label, labelSecondary, labelTertiary }:DemoProps ) => {
  return (
    <div style={{
      backgroundColor: color.primary.lighter.value,
      border: `1px dashed ${color.primary.pure.value}`,
      display: "block",
      height: "90px",
      padding: "0.5rem"
    }}>
      <Text size="caption" appearance="primary" lineHeight="heading" block>{label}</Text>
      {labelSecondary && <Text size="caption" appearance="primary" lineHeight="heading" block>{labelSecondary}</Text>}
      {labelTertiary && <Text size="caption" appearance="primary" lineHeight="heading" block>{labelTertiary}</Text>}
    </div>
  )
}

export const AutoWidthCols = (args) => {
  const [cardCount, setCardCount] = useState("cards", 3);

  const repeatingCards: JSX.Element[] = [];
  for (let i = 1; i <= cardCount; i++) {
    repeatingCards.push(<Grid.Column key={i}><DemoContent label="Column with auto width" /></Grid.Column>);
  }

  return(
    <Grid {...args}> 
      <Grid.Row spacing={args.spacing}>
        {repeatingCards}
      </Grid.Row>
      <Grid.Row>
        <Stack>
          <Button onClick={() => setCardCount(cardCount - 1)}>Remove column</Button>
          <Button onClick={() => setCardCount(cardCount + 1)}>Add column</Button>
        </Stack>
      </Grid.Row>
    </Grid>
  )
};

export const FixedWidthCols = (args) => {
  const [cardCount, setCardCount] = useState("cards", 1);

  const repeatingCards: JSX.Element[] = [];
  for (let i = 1; i <= cardCount; i++) {
    repeatingCards.push(<Grid.Column key={i}><DemoContent label="Column with auto width" /></Grid.Column>);
  }

  return(
    <Grid {...args}> 
      <Grid.Row spacing={args.spacing}>
        <Grid.Column sm={args.sm} md={args.md} lg={args.lg}>
          <DemoContent label={`Width sm ${args.sm}`} labelSecondary={`Width md ${args.md}`} labelTertiary={`Width lg ${args.lg}`} />
        </Grid.Column>
        {repeatingCards}
      </Grid.Row>
      <Grid.Row>
        <Stack>
          <Button onClick={() => setCardCount(cardCount - 1)}>Remove column</Button>
          <Button onClick={() => setCardCount(cardCount + 1)}>Add column</Button>
        </Stack>
      </Grid.Row>
    </Grid>
  )
};

AutoWidthCols.args = {
  fluid: false,
  spacing: "base"
}

FixedWidthCols.args = {
  fluid: false,
  sm: 0,
  md: 0,
  lg: 0,
  spacing: "base"
}
