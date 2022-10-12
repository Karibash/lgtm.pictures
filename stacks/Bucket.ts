import { Bucket } from '@serverless-stack/resources';
import { Duration } from 'aws-cdk-lib';
import { OriginAccessIdentity } from 'aws-cdk-lib/aws-cloudfront';
import { BlockPublicAccess } from 'aws-cdk-lib/aws-s3';

import type { StackContext } from '@serverless-stack/resources';

export const ContentsBucket = ({ stack }: StackContext) => {
  const bucket = new Bucket(stack, 'ContentsBucket', {
    cdk: {
      bucket: {
        blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
        lifecycleRules: [
          {
            prefix: 'temporal/',
            expiration: Duration.days(1),
          },
        ],
      },
    },
  });

  const originReadAccessIdentity = new OriginAccessIdentity(stack, 'OAI');
  bucket.cdk.bucket.grantRead(originReadAccessIdentity);

  return {
    contentsBucket: bucket,
    contentsBucketReadAccessIdentity: originReadAccessIdentity,
  };
};
