import { PageComponent } from './_app';
import ApplicationLayout from '../components/layouts/ApplicationLayout';

const HomePage: PageComponent = () => {
  return (
    <div>
      LATEST
    </div>
  );
};

HomePage.getLayout = page => {
  return <ApplicationLayout>{page}</ApplicationLayout>;
};

export default HomePage;
