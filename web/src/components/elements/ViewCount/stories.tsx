import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ViewCount from './index';

export default {
  title: 'Elements/ViewCount',
  component: ViewCount,
} as ComponentMeta<typeof ViewCount>;

const Template: ComponentStory<typeof ViewCount> = args => <ViewCount {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 10,
};

export const WithComma = Template.bind({});
WithComma.args = {
  count: 1000,
};

export const WithUnit = Template.bind({});
WithUnit.args = {
  count: 1000000,
};
