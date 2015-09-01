import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    return this.store.findAll('customer').then(function(customers) {
      return customers.filter(function(customer) {
        console.log("customer " + customer + " is " + customer.get('dateOnWaitingList'));
        return customer.get('dateOnWaitingList');
      }).sort(function(a, b) {
          return a.get('dateOnWaitingList') > b.get('dateOnWaitingList');
      });
    });
  }
});
