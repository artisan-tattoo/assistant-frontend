import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['name'],
  name: '',
  filteredCustomers: Ember.computed('model', function() {
    var name = this.get('name')
    var customers = this.get('model');

    if (name) {
      return customers.filterBy('name', name);
    } else {
      return customers;
    }
  }),
  sortProperties: ['id'],
  sortedCustomers: Ember.computed.sort('model', 'sortProperties'),
  actions: {
    sort: function() {
      return false;
    }
  }
});
