import React from "react";

import { Grid, Text } from "../../components/src";

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
      <Text size="caption" appearance="primary" block>{label}</Text>
      {labelSecondary && <Text size="caption" appearance="primary" block>{labelSecondary}</Text>}
      {labelTertiary && <Text size="caption" appearance="primary" block>{labelTertiary}</Text>}
    </div>
  )
}

const repeatingCards: JSX.Element[] = [];
for (let i = 1; i <= 3; i++) {
  repeatingCards.push(<Grid.Column><DemoContent key={i} label="Content" /></Grid.Column>);
}

const Template = (args) =>
  <Grid {...args}> 
    <Grid.Row spacing={args.spacing}>
      {repeatingCards}
    </Grid.Row>
    <Grid.Row spacing={args.spacing}>
      <Grid.Column sm={args.sm} md={args.md} lg={args.lg}>
        <DemoContent label={`Width sm ${args.sm}`} labelSecondary={`Width md ${args.md}`} labelTertiary={`Width lg ${args.lg}`} />
      </Grid.Column>
      <Grid.Column>
        <DemoContent label="Content 2" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
;

export const Default = Template.bind({});
Default.args = {
  fluid: false,
  sm: 0,
  md: 0,
  lg: 0,
  spacing: "base"
}
