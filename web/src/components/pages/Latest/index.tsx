import Head from 'next/head';
import { useCallback, useMemo } from 'react';

import { trpc } from '../../../trpc';
import PostList from '../../domains/PostList';
import ApplicationLayout from '../../layouts/ApplicationLayout';

import type { PageComponent } from '../../../pages/_app';

const LatestPage: PageComponent = () => {
  const postsQuery = trpc.posts.getLatestPosts.useInfiniteQuery({}, {
    getNextPageParam: page => page.pageInfo.startCursor,
  });

  const posts = useMemo(() => {
    return postsQuery.data?.pages.flatMap(page => page.edges.map(edge => edge.node)) ?? [];
  }, [postsQuery.data]);

  const endReached = useCallback(() => {
    if (postsQuery.isLoading) return;
    void postsQuery.fetchNextPage();
  }, [postsQuery]);

  return (
    <div>
      <Head>
        <title>Latest - Looks To Me</title>
      </Head>
      <PostList posts={posts} endReached={endReached} />
    </div>
  );
};

LatestPage.getLayout = page => {
  return <ApplicationLayout>{page}</ApplicationLayout>;
};

export default LatestPage;
