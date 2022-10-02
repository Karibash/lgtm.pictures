import React from 'react';

import ApplicationLayout from './index';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Layouts/ApplicationLayout',
  component: ApplicationLayout,
} as ComponentMeta<typeof ApplicationLayout>;

const Template: ComponentStory<typeof ApplicationLayout> = args => <ApplicationLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
};
