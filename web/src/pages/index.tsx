import Head from 'next/head';

import PostList from '../components/domains/PostList';
import ApplicationLayout from '../components/layouts/ApplicationLayout';
import { PageComponent } from './_app';

const HomePage: PageComponent = () => {
  return (
    <div>
      <Head>
        <title>Latest - Looks To Me</title>
      </Head>
      <PostList posts={[]} />
    </div>
  );
};

HomePage.getLayout = page => {
  return <ApplicationLayout>{page}</ApplicationLayout>;
};

export default HomePage;
