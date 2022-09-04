import { PageComponent } from './_app';
import ApplicationLayout from '../components/layouts/ApplicationLayout';

const FavoritesPage: PageComponent = () => {
  return (
    <div>
      FAVORITES
    </div>
  );
};

FavoritesPage.getLayout = page => {
  return <ApplicationLayout>{page}</ApplicationLayout>;
};

export default FavoritesPage;
