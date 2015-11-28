import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  deactivate: function() {
    this.get('controller.content').rollback();
  },
  model: function() {
    return Ember.RSVP.hash({
      appointment: {
        var customer = this.modelFor("customer");
        var appointment = this.store.createRecord('appointment');

        // until we implement artists
        appointment.set("artistId", 1);
        appointment.set("customerId", customer.id);
      },
      customer: this.modelFor("customer"),
    });
  },
});
