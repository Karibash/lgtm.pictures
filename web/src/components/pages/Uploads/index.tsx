import Head from 'next/head';

import { PageComponent } from '../../../pages/_app';
import ApplicationLayout from '../../layouts/ApplicationLayout';

const UploadsPage: PageComponent = () => {
  return (
    <div>
      <Head>
        <title>Uploads - Looks To Me</title>
      </Head>
      UPLOADS
    </div>
  );
};

UploadsPage.getLayout = page => {
  return <ApplicationLayout>{page}</ApplicationLayout>;
};

export default UploadsPage;
