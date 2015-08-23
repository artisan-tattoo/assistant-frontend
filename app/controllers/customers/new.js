import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createCustomer: function () {
      let customer = this.get('model').save();
      this.transitionToRoute('customer', customer);
    }
  }
});
