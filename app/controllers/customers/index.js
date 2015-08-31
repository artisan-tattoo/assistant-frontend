import Ember from 'ember';

export default Ember.ArrayController.extend({
  filter: '',
  sortProperties: ['id'],

  filteredContent: Ember.computed('arrangedContent', 'filter', function(){
    var filter = this.get('filter');
    var rx = new RegExp(filter, 'gi');
    var customers = this.get('arrangedContent');

    return customers.filter(function(customer) {
      return customer.get('name').match(rx);
    });

  }),

  actions: {
    sort: function(property) {
      this.set('sortProperties', [property]);
    }
  }
});
