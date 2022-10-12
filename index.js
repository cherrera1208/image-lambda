'use strict';

//code from aws IDE

const AWS_SDK = require('aws-sdk');

const s3Client = new AWS_SDK.S3();

exports.handler = async (event) => {
  console.log(event.Records[0].s3);
  const {
    bucket,
    object,
  } = event.Records[0].s3;

  let uploadedFile = await s3Client.getObject({
    Bucket: bucket.name,
    Key: object.name
  });
  console.log(uploadedFile);

  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
