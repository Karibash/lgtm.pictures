import React from 'react';

import ShareUrlButton from './index';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Elements/ShareUrlButton',
  component: ShareUrlButton,
} as ComponentMeta<typeof ShareUrlButton>;

const Template: ComponentStory<typeof ShareUrlButton> = args => <ShareUrlButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  url: 'https://google.com',
};
