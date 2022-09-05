import { PageComponent } from './_app';
import PostList from '../components/domains/PostList';
import ApplicationLayout from '../components/layouts/ApplicationLayout';

const TrendsPage: PageComponent = () => {
  return (
    <div>
      <PostList posts={[]} />
    </div>
  );
};

TrendsPage.getLayout = page => {
  return <ApplicationLayout>{page}</ApplicationLayout>;
};

export default TrendsPage;
