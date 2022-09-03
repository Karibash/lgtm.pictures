import { PageComponent } from './_app';
import ApplicationLayout from '../components/layouts/ApplicationLayout';

const BookmarksPage: PageComponent = () => {
  return (
    <div>
      BOOKMARKS
    </div>
  );
};

BookmarksPage.getLayout = page => {
  return <ApplicationLayout>{page}</ApplicationLayout>;
};

export default BookmarksPage;
