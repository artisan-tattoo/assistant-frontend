import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  deactivate: function() {
    this.get('controller.content').rollback();
  },
  model: function() {
    var appointment = this.store.createRecord('appointment');

    // until we implement artist drop-down
    appointment.set("artistId", 1);
    appointment.set("customerId", 1);

    return appointment;
  }
});
