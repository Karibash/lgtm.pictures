import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ApplicationNavigation from './index';

export default {
  title: 'Domains/ApplicationNavigation',
  component: ApplicationNavigation,
} as ComponentMeta<typeof ApplicationNavigation>;

const Template: ComponentStory<typeof ApplicationNavigation> = args => <ApplicationNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {
};
