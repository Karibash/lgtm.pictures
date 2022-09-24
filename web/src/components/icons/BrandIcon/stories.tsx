import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import BrandIcon from './index';

export default {
  title: 'Icons/BrandIcon',
  component: BrandIcon,
} as ComponentMeta<typeof BrandIcon>;

const Template: ComponentStory<typeof BrandIcon> = args => <BrandIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
};
