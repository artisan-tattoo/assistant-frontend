import Ember from 'ember';

export default Ember.Controller.extend({
  search: '',
  actions: {
    query: function() {
      var query = this.get('search');
      this.transitionToRoute('customers', { queryParams: { name:query } });
    }
  }
});
