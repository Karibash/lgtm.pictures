import Head from 'next/head';

import PostList from '../../domains/PostList';
import ApplicationLayout from '../../layouts/ApplicationLayout';

import type { PageComponent } from '../../../pages/_app';

const FavoritesPage: PageComponent = () => {
  return (
    <div>
      <Head>
        <title>Favorites - Looks To Me</title>
      </Head>
      <PostList posts={[]} />
    </div>
  );
};

FavoritesPage.getLayout = page => {
  return <ApplicationLayout>{page}</ApplicationLayout>;
};

export default FavoritesPage;
