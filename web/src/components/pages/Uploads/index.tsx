import Head from 'next/head';

import ApplicationLayout from '../../layouts/ApplicationLayout';

import type { PageComponent } from '../../../pages/_app';

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
