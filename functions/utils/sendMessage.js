'use strict';

const client =
  require('twilio')(process.env.ACCOUNT_SID, process.env.ACCOUNT_TOKEN);

module.exports = ({ body, to }) =>
  new Promise((resolve, reject) => {
    client.messages.create({ body, to, from: '+18434201265' })
      .then(resolve)
      .catch(reject);
  });
