'use strict';

module.exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello cron!' }),
  };

  console.log('hello cron :)');

  callback(null, response);
};

