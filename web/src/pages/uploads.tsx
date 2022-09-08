import ApplicationLayout from '../components/layouts/ApplicationLayout';
import { PageComponent } from './_app';

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
