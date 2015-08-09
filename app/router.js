import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('customers', function() {
    this.route('new');
    this.resource('customer', { path: ':customer_id' });
  });
  this.route('login');
});

export default Router;
