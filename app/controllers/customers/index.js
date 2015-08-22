import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['id'],
  sortedCustomers: Ember.computed.sort('model', 'sortProperties'),
  actions: {
    sort: function() {
      return false;
    }
  }
});
