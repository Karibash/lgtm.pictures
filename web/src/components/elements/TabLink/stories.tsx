import React from 'react';

import TabLink from './index';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Elements/TabLink',
  component: TabLink,
} as ComponentMeta<typeof TabLink>;

const Template: ComponentStory<typeof TabLink> = args => <TabLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'label',
  value: 'value',
  href: '/',
};
