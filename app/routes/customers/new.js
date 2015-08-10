import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    var customer = this.store.createRecord('customer');

    // until we implement artist drop-down
    customer.set("artistId", 1);

    return customer;
  }
});
