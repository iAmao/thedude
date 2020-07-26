'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'client',
    podModulePrefix: 'client/pods',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    APP: {
      // 'ember-simple-auth-okta': {
      //   config: {
      //     url: 'https://dev-366498.okta.com',
      //     issuer: 'https://dev-366498.okta.com/oauth2/default',
      //     clientId: '0oal9xkuy7pZFHONM4x6',
      //     redirectUri: 'http://localhost:4200/expense',
      //     tokenManager: {
      //       storage: 'localStorage'
      //     }
      //   },
      //   headerAuthorization: 'Authorization',
      //   idTokenScopes: ['email', 'openid']
      // }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
