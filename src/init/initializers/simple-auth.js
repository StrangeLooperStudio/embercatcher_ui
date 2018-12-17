import ToriiAuthenticator from '../../authenticators/torii';
import GithubProvider from '../../torii-providers/github';

export function initialize(application) {
  application.register('authenticator:torii', ToriiAuthenticator);
  application.register('torii-provider:github', GithubProvider);
}

export default {
  name: 'simple-auth-torii-register',
  initialize
};
