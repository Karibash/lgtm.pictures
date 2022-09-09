import Head from 'next/head';

import PostList from '../components/domains/PostList';
import ApplicationLayout from '../components/layouts/ApplicationLayout';
import { PageComponent } from './_app';

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
