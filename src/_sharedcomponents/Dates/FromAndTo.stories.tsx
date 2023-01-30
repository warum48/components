import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import useState from 'storybook-addon-state';
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ru";

import { FromAndTo } from './FromAndTo';

export default {
  title: 'Components/Dates/FromAndTo',
  component: FromAndTo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*argTypes: {
    backgroundColor: { control: 'color' },
  },*/
} as ComponentMeta<typeof FromAndTo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
//const Template: ComponentStory<typeof FromAndTo> = (args) => <FromAndTo {...args} />; //{...args} 

/*export const FromAndTo_template = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FromAndTo_template.args = {
    valueTo: null,
    setValueTo: null,
    valueFrom: null ,
    setValueFrom:null,
  //sx:{ position: "absolute", mt: 1, top: 1, left: 1 }
}*/
export const FromAndToExample = ({ ...args }) => {
    //const [isOpenModal, setIsOpenModal] = useState(isOpen);
    const valueFrom = dayjs().subtract(1, 'month')
  
  const valueTo = dayjs()
  
  
    
  
    return (
        <FromAndTo valueFrom={valueFrom} valueTo={valueTo} setValueFrom={()=>{}} setValueTo={()=>{}}/>
    );
  };
/*
export const Expanded = Template.bind({});
Expanded.args = {
  isCollapsed: false,
};*/
