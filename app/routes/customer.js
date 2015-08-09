import Ember from 'ember';

export default Ember.Route.extend({
  model: function(customer_id) {
    return this.store.findRecord('customer', customer_id);
  }
});
