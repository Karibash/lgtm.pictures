import React from 'react';

import ApplicationHeader from './index';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Domains/ApplicationHeader',
  component: ApplicationHeader,
} as ComponentMeta<typeof ApplicationHeader>;

const Template: ComponentStory<typeof ApplicationHeader> = args => <ApplicationHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
};
