import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createCustomer: function () {
      let customer = this.get('model').save();
      this.transitionToRoute('customer', customer);
    }
  },
  statuses: [
    { value: 1, name: 'Ongoing' },
    { value: 2, name: 'Waiting List' },
    { value: 3, name: 'Finished' },
    { value: 4, name: 'On Hold' }
  ],
  default_status: 1
});
