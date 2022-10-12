import { NextjsSite, use } from '@serverless-stack/resources';
import {
  AllowedMethods,
  CachedMethods,
  Function,
  FunctionCode,
  FunctionEventType,
  ViewerProtocolPolicy,
} from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';

import { ContentsBucket } from './Bucket';

import type { StackContext } from '@serverless-stack/resources';

export const Web = ({ stack }: StackContext) => {
  const { contentsBucket, contentsBucketReadAccessIdentity } = use(ContentsBucket);

  const removePrefixPathFunction = new Function(stack, 'Function', {
    code: FunctionCode.fromInline(`
      function handler(event) {
        var request = event.request;
        request.uri = request.uri.replace(/^\\/[^\\/]+\\//,'/');
        return request;
      }
    `),
  });

  return new NextjsSite(stack, 'site', {
    path: 'web',
    nextBinPath: '../node_modules/.bin/next',
    customDomain: stack.stage === 'local' ? undefined : {
      domainName: stack.stage === 'production' ? 'lgtm.pictures' : `${stack.stage}.lgtm.pictures`,
      domainAlias: stack.stage === 'production' ? 'www.lgtm.pictures' : undefined,
    },
    cdk: {
      distribution: {
        additionalBehaviors: {
          '/contents/*': {
            compress: true,
            origin: new S3Origin(contentsBucket.cdk.bucket, {
              originAccessIdentity: contentsBucketReadAccessIdentity,
            }),
            functionAssociations: [{
              function: removePrefixPathFunction,
              eventType: FunctionEventType.VIEWER_REQUEST,
            }],
            viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            allowedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
            cachedMethods: CachedMethods.CACHE_GET_HEAD_OPTIONS,
          },
        },
      },
    },
    defaults: {
      function: {
        permissions: [
          contentsBucket,
        ],
      },
    },
    environment: {
      NEXT_PUBLIC_STAGE: stack.stage,
      CONTENTS_BUCKET_NAME: contentsBucket.bucketName,
    },
  });
};
