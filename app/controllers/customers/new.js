import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createCustomer: function () {
      // we're going to handle our own errors for now
      // cc https://github.com/endpoints/endpoints/issues/147
      var customer = this.get('model').one('becameError', function(error) {
        var customer = error.record;
        if(!customer.get('name')) {
          error.record.get('errors').add('name', 'This field is required');
        }
        if(!customer.get('phone')) {
          error.record.get('errors').add('phone', 'This field is required');
        }
      }).save();
      this.transitionToRoute('customer', customer);
    }
  }
});
