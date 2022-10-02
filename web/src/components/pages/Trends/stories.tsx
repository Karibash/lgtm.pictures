import React from 'react';

import TrendsPage from './index';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Pages/TrendsPage',
  component: TrendsPage,
  parameters: {
    nextRouter: {
      pathname: '/trends',
    },
  },
} as ComponentMeta<typeof TrendsPage>;

const Template: ComponentStory<typeof TrendsPage> = args => {
  const getLayout = TrendsPage.getLayout ?? (page => page);
  return <>{getLayout(<TrendsPage {...args} />)}</>;
};

export const Default = Template.bind({});
Default.args = {
};
