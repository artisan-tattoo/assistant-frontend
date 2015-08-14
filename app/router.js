import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('customers', { path: 'customers' }, function() {
    this.route('new');
  });
  this.route('customer', { path: 'customers/:customer_id' }, function() {
    this.route('edit');
  });
  this.route('login');
  this.route('login', { path: '/' });
});

export default Router;
