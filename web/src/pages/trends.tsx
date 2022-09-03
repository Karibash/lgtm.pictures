import { PageComponent } from './_app';
import ApplicationLayout from '../components/layouts/ApplicationLayout';

const TrendsPage: PageComponent = () => {
  return (
    <div>
      TRENDS
    </div>
  );
};

TrendsPage.getLayout = page => {
  return <ApplicationLayout>{page}</ApplicationLayout>;
};

export default TrendsPage;
