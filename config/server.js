module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', ''),
  app: {
    keys: [
      env('APP_KEY_A', 'ponteGEEK_key_A_' + Math.random().toString(36).slice(2)),
      env('APP_KEY_B', 'ponteGEEK_key_B_' + Math.random().toString(36).slice(2))
    ]
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  "autoReload": {
    "enable": true
  },
});

