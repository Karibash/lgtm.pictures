import Head from 'next/head';

import PostList from '../../domains/PostList';
import ApplicationLayout from '../../layouts/ApplicationLayout';

import type { PageComponent } from '../../../pages/_app';

const LatestPage: PageComponent = () => {
  return (
    <div>
      <Head>
        <title>Latest - Looks To Me</title>
      </Head>
      <PostList posts={[]} />
    </div>
  );
};

LatestPage.getLayout = page => {
  return <ApplicationLayout>{page}</ApplicationLayout>;
};

export default LatestPage;
