import React from 'react';

import FavoritesPage from './index';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Pages/FavoritesPage',
  component: FavoritesPage,
  parameters: {
    nextRouter: {
      pathname: '/favorites',
    },
  },
} as ComponentMeta<typeof FavoritesPage>;

const Template: ComponentStory<typeof FavoritesPage> = args => {
  const getLayout = FavoritesPage.getLayout ?? (page => page);
  return <>{getLayout(<FavoritesPage {...args} />)}</>;
};

export const Default = Template.bind({});
Default.args = {
};
