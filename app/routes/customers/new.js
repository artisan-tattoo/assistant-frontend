import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var customer = this.store.createRecord('customer');

    // until we implement artist drop-down
    customer.set("artistId", 1);

    return customer;
  }
});
