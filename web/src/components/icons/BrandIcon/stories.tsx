import React from 'react';

import BrandIcon from './index';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Icons/BrandIcon',
  component: BrandIcon,
} as ComponentMeta<typeof BrandIcon>;

const Template: ComponentStory<typeof BrandIcon> = args => <BrandIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
};
