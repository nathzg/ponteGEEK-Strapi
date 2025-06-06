const path = require('path');

    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'pontegeek-db.cvkksi1ymser.us-east-2.rds.amazonaws.com'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'postgres'),
          user: env('DATABASE_USERNAME', 'pontedba'),
          password: env('DATABASE_PASSWORD', 'ponteGeekDBA01.'),
          schema: env('DATABASE_SCHEMA', 'public'),
          ssl: {
            rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
          },
        },
        debug: false,
      },
    });
