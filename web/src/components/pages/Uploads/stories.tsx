import React from 'react';

import UploadsPage from './index';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Pages/UploadsPage',
  component: UploadsPage,
  parameters: {
    nextRouter: {
      pathname: '/uploads',
    },
  },
} as ComponentMeta<typeof UploadsPage>;

const Template: ComponentStory<typeof UploadsPage> = args => {
  const getLayout = UploadsPage.getLayout ?? (page => page);
  return <>{getLayout(<UploadsPage {...args} />)}</>;
};

export const Default = Template.bind({});
Default.args = {
};
