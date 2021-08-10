/* config-overrides.js */
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));
    delete config.module.rules[1].oneOf[2].include
    return config;
  }