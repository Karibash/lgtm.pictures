import PostList from '../components/domains/PostList';
import ApplicationLayout from '../components/layouts/ApplicationLayout';
import { PageComponent } from './_app';

const HomePage: PageComponent = () => {
  return (
    <div>
      <PostList posts={[]} />
    </div>
  );
};

HomePage.getLayout = page => {
  return <ApplicationLayout>{page}</ApplicationLayout>;
};

export default HomePage;
