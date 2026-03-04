const crypto = require('crypto');

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', crypto.randomBytes(16).toString('base64')),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', crypto.randomBytes(16).toString('base64')),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', crypto.randomBytes(16).toString('base64')),
    },
  },
  secrets: {
    encryptionKey: env('ADMIN_ENCRYPTION_KEY', crypto.randomBytes(16).toString('base64')),
  },
});
