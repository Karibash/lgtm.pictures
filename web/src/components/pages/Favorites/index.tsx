import Head from 'next/head';

import { PageComponent } from '../../../pages/_app';
import PostList from '../../domains/PostList';
import ApplicationLayout from '../../layouts/ApplicationLayout';

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
