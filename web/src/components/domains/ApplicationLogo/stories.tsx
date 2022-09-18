import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ApplicationLogo from './index';

export default {
  title: 'Domains/ApplicationLogo',
  component: ApplicationLogo,
} as ComponentMeta<typeof ApplicationLogo>;

const Template: ComponentStory<typeof ApplicationLogo> = args => <ApplicationLogo {...args} />;

export const Default = Template.bind({});
Default.args = {
};
