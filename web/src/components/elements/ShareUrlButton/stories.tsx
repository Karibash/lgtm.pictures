import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ShareUrlButton from './index';

export default {
  title: 'Elements/ShareUrlButton',
  component: ShareUrlButton,
} as ComponentMeta<typeof ShareUrlButton>;

const Template: ComponentStory<typeof ShareUrlButton> = args => <ShareUrlButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  url: 'https://google.com',
};
