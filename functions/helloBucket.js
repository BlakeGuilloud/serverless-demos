'use strict';

module.exports.handler = (event, context, callback) => {
  event.Records.forEach((record) => {
    const filename = record.s3.object.key;
    const filesize = record.s3.object.size;

    console.log(`New bucket object has been created: ${filename} (${filesize} bytes)`);
  });

  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: 'Bucket object has been created!' }),
  };

  callback(null, response);
};
