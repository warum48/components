import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CollapseButton } from './CollapseButton';

export default {
  title: 'Components/Buttons/CollapseButton',
  component: CollapseButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*argTypes: {
    backgroundColor: { control: 'color' },
  },*/
} as ComponentMeta<typeof CollapseButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CollapseButton> = (args) => <CollapseButton {...args} />; //{...args} 

export const Collapsed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Collapsed.args = {
  isCollapsed: true,
  //sx:{ position: "absolute", mt: 1, top: 1, left: 1 }
};
export const Expanded = Template.bind({});
Expanded.args = {
  isCollapsed: false,
};
