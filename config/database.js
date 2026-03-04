const path = require('path');

module.exports = ({ env }) => {
  const dbPath = env('DATABASE_FILENAME', '.tmp/data.db');
  const filename = dbPath.startsWith('/')
    ? dbPath
    : path.join(__dirname, '..', dbPath);

  return {
    connection: {
      client: 'sqlite',
      connection: { filename },
      useNullAsDefault: true,
      debug: false,
    },
  };
};
