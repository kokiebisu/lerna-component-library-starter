import React from "react";
import { Story, Meta } from "@storybook/react";
import { Button } from ".";

export default {
  title: "Button",
  component: Button,
} as Meta;

const TemplateStory: Story<{}> = (args) => <Button {...args} />;

export const Primary = TemplateStory.bind({});
Primary.args = {};
