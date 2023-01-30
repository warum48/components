import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GoToTop } from './GoToTop';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Buttons/GoToTop',
  component: GoToTop,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*argTypes: {
    backgroundColor: { control: 'color' },
  },*/
} as ComponentMeta<typeof GoToTop>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GoToTop> = (args) => <GoToTop {...args} />; //{...args} 

export const GoToTop_preview = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
GoToTop_preview.args = {
  showAlways: true,
};
/*export const GTT_hidden = Template.bind({});
GTT_hidden.args = {
    showAlways: false,
  };*/

/*export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};*/
