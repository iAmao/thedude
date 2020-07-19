/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'expense',
    podModulePrefix: 'expense/pods',
    environment
  };

  return ENV;
};
