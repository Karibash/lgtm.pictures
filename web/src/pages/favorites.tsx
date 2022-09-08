import PostList from '../components/domains/PostList';
import ApplicationLayout from '../components/layouts/ApplicationLayout';
import { PageComponent } from './_app';

const FavoritesPage: PageComponent = () => {
  return (
    <div>
      <PostList posts={[]} />
    </div>
  );
};

FavoritesPage.getLayout = page => {
  return <ApplicationLayout>{page}</ApplicationLayout>;
};

export default FavoritesPage;
