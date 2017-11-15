'use strict';

const sendMessage = require('./utils/sendMessage');

module.exports.handler = (event, context, callback) => {
  const message = event.body ? JSON.parse(event.body) : { body: 'hello world!!', to: '+18438126962' };
  
  sendMessage(message)
    .then(data => {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          success: `Message ${message.body} sent to ${message.to}`,
        }),
      };
    
      callback(null, response);
    })
    .catch(err => callback(null, err));
};
