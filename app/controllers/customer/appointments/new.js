import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createAppointment: function () {
      var appointment = this.get('model');

      appointment.save();

      this.transitionToRoute('customer', appointment.get('customer'));
    }
  }
});
