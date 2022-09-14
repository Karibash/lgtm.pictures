import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ApplicationLayout from './index';

export default {
  title: 'Layouts/ApplicationLayout',
  component: ApplicationLayout,
} as ComponentMeta<typeof ApplicationLayout>;

const Template: ComponentStory<typeof ApplicationLayout> = args => <ApplicationLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
};
