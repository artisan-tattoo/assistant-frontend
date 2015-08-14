import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    update: function () {
      this.get('model').save();
      this.transitionToRoute('customer');
    }
  }
});
