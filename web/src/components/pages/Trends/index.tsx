import Head from 'next/head';

import { PageComponent } from '../../../pages/_app';
import PostList from '../../domains/PostList';
import ApplicationLayout from '../../layouts/ApplicationLayout';

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
