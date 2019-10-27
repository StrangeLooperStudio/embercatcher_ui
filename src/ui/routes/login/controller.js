import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  actions: {
  authenticate() {
    this.get('session').authenticate('authenticator:torii', 'github')
      .catch((reason) => {
        debugger
        this.set('errorMessage', reason.error || reason);
      })
      .finally(() => {
        debugger;
      });
  }
 }
});
