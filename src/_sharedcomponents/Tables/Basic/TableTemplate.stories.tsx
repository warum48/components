import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TableTemplate } from "./TableTemplate";
import { IHeader } from "./IHeader";
import { pathToImg } from "CONSTS";
//import md from '!raw-loader!./sharedcomponents_Tables_Basic_IHeader.md' //../../../../
//import { storiesOf } from '@storybook/react';
//import md from 'README.md'
//@ts-ignore
//import readme from './README.md';

export default {
  title: "Components/Tables/Basic/TableTemplate",
  component: TableTemplate,
  /*parameters: {
    docs: {
      description: { component: readme }
    }
  }*/ //
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*argTypes: {
    backgroundColor: { control: 'color' },
  },*/
} as ComponentMeta<typeof TableTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TableTemplate> = (args) => (
  <TableTemplate {...args} />
); //{...args}

const columns: IHeader[] = [
  /*{ field: "good.name", headerName: "Товар" },
  {
    field: "outReason.name",
    headerName: "Причина отсутствия",
  },
  {
    field: "image",
    headerName: "Изображение",
    type: "image",
  },*/
  { field: "string", headerName: "string" },

  {
    field: "boolean",
    headerName: "boolean",
    func: (st) => (st === true ? "Есть в отчете" : "Товара нет в отчете"),
    funcStyle: (st) => (st === "Есть в отчете" ? {
      color: "green",
    }:{
      color: "red",
    }),
  },
  {
    field: "number",
    headerName: "number",
  },
  {
    field: "image",
    headerName: "image",
    type: "image",
  },
];

const rows = [
  {string: "Название 1", boolean: true,  number: 100, image: 'tasks/exec/2023/01/26/4762064_728_2.jpg'}, //https://client.shop-survey.ru/media/tasks/exec/2023/01/26/4762064_728_2.jpg
  {string: "Название 2", boolean: false, number: 120, image: 'tasks/exec/2023/01/26/4762064_728_2.jpg'},//pathToImg+'https://client.shop-survey.ru/media/tasks/exec/2023/01/26/4762072_169_1.jpg'}
  {string: "Название 3", boolean: true,  number: 100, image: 'tasks/exec/2023/01/26/4762064_728_2.jpg'}, //https://client.shop-survey.ru/media/tasks/exec/2023/01/26/4762064_728_2.jpg
  {string: "Название 4", boolean: false, number: 120, image: 'tasks/exec/2023/01/26/4762064_728_2.jpg'}
]



export const TableTemplateBasic = Template.bind({});
TableTemplateBasic.args = {
  columns: columns,
  rows: rows,
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
/*Collapsed.args = {
  isCollapsed: true,
  //sx:{ position: "absolute", mt: 1, top: 1, left: 1 }
};
export const Expanded = Template.bind({});
Expanded.args = {
  isCollapsed: false,
};*/
