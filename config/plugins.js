    // ~/strapi-aws-s3/backend/config/plugins.js
    
    module.exports = ({ env }) => ({
        upload: {
          config: {
            provider: 'aws-s3',
            providerOptions: {
              accessKeyId: env('AWS_ACCESS_KEY_ID'),
              secretAccessKey: env('AWS_ACCESS_SECRET'),
              region: env('AWS_REGION'),
              //endpoint: env('AWS_ENDPOINT'),
              params: {
                Bucket: env('AWS_BUCKET'),
              },
            },
            actionOptions: {
              upload: {},
              uploadStream: {},
              delete: {},
            },
          },
        },
        //ckeditor5: {
        //  enabled: true,
          //resolve: "./src/plugins/strapi-plugin-ckeditor"
        //},
      });
      