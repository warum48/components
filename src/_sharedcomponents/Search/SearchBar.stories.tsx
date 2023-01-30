import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchBar } from './SearchBar';

export default {
  title: 'Components/Search/SearchBar',
  component: SearchBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*argTypes: {
    backgroundColor: { control: 'color' },
  },*/
} as ComponentMeta<typeof SearchBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchBar> = (args) => <SearchBar {...args} />; //{...args} 

export const SearchBar_template = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SearchBar_template.args = {
    searchVar: ()=>{}
  //sx:{ position: "absolute", mt: 1, top: 1, left: 1 }
}
/*
export const Expanded = Template.bind({});
Expanded.args = {
  isCollapsed: false,
};*/
