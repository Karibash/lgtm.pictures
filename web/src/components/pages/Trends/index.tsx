import Head from 'next/head';

import PostList from '../../domains/PostList';
import ApplicationLayout from '../../layouts/ApplicationLayout';

import type { PageComponent } from '../../../pages/_app';

const TrendsPage: PageComponent = () => {
  return (
    <div>
      <Head>
        <title>Trends - Looks To Me</title>
      </Head>
      <PostList posts={[]} />
    </div>
  );
};

TrendsPage.getLayout = page => {
  return <ApplicationLayout>{page}</ApplicationLayout>;
};

export default TrendsPage;
