import { Bucket, Config } from '@serverless-stack/resources';
import { Duration } from 'aws-cdk-lib';
import { Distribution } from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { BlockPublicAccess } from 'aws-cdk-lib/aws-s3';

import type { StackContext } from '@serverless-stack/resources';

export const TemporalBucket = ({ stack }: StackContext) => {
  const bucket = new Bucket(stack, 'TemporalBucket', {
    cdk: {
      bucket: {
        blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
        lifecycleRules: [
          {
            expiration: Duration.days(1),
          },
        ],
      },
    },
  });

  return {
    bucket,
    parameters: [
      new Config.Parameter(stack, 'TEMPORAL_BUCKET_NAME', {
        value: bucket.bucketName,
      }),
    ],
  };
};

export const PublicBucket = ({ stack }: StackContext) => {
  const bucket = new Bucket(stack, 'PublicBucket', {
    cdk: {
      bucket: {
        blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      },
    },
  });

  new Distribution(stack, 'PublicBucketDistribution', {
    defaultBehavior: {
      origin: new S3Origin(bucket.cdk.bucket),
    },
  });

  return {
    bucket,
    parameters: [
      new Config.Parameter(stack, 'PUBLIC_BUCKET_NAME', {
        value: bucket.bucketName,
      }),
    ],
  };
};
