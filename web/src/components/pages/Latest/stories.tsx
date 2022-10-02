import React from 'react';

import LatestPage from './index';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Pages/LatestPage',
  component: LatestPage,
  parameters: {
    nextRouter: {
      pathname: '/',
    },
  },
} as ComponentMeta<typeof LatestPage>;

const Template: ComponentStory<typeof LatestPage> = args => {
  const getLayout = LatestPage.getLayout ?? (page => page);
  return <>{getLayout(<LatestPage {...args} />)}</>;
};

export const Default = Template.bind({});
Default.args = {
};
