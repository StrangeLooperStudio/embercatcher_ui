import Resolver from 'ember-resolver/resolvers/fallback';
import buildResolverConfig from 'ember-resolver/ember-config';
import config from '../config/environment';

let moduleConfig = buildResolverConfig(config.modulePrefix);
/*
 * If your application has custom types and collections, modify moduleConfig here
 * to add support for them.
 */

Object.assign(moduleConfig.types, {
  'authenticator': { definitiveCollection: 'main' },
  'session': { definitiveCollection: 'main' },
  'session-store': { definitiveCollection: 'main' },
  'torii-provider': { definitiveCollection: 'main' },
  'torii-service': { definitiveCollection: 'main' }
});

moduleConfig.collections.main.types.push('authenticator');
moduleConfig.collections.main.types.push('session-store');
moduleConfig.collections.main.types.push('session');
moduleConfig.collections.main.types.push('torii-provider');
moduleConfig.collections.main.types.push('torii-service');

export default Resolver.extend({
  config: moduleConfig
});
