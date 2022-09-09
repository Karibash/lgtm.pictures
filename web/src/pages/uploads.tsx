import Head from 'next/head';

import ApplicationLayout from '../components/layouts/ApplicationLayout';
import { PageComponent } from './_app';

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
