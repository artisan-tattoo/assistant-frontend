import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    var customer = this.modelFor('customer');
    var appointment = this.store.createRecord('appointment');
    
    // until we implement artists
    appointment.set("artistId", 1);
    appointment.set("customer", customer);
    
    return appointment;
  },
});
