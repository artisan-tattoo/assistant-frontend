import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete: function() {
      this.get('model').destroyRecord();
      this.transitionToRoute('customers');
    },
    update: function() {
      this.get('model').update();
    }
  }
});
