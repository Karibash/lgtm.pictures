import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ApplicationHeader from './index';

export default {
  title: 'Domains/ApplicationHeader',
  component: ApplicationHeader,
} as ComponentMeta<typeof ApplicationHeader>;

const Template: ComponentStory<typeof ApplicationHeader> = args => <ApplicationHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
};
