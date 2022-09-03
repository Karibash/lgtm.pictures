import { PageComponent } from './_app';
import ApplicationLayout from '../components/layouts/ApplicationLayout';

const UploadsPage: PageComponent = () => {
  return (
    <div>
      UPLOADS
    </div>
  );
};

UploadsPage.getLayout = page => {
  return <ApplicationLayout>{page}</ApplicationLayout>;
};

export default UploadsPage;
