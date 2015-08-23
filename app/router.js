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
  this.route('calendar', { path: 'calendar' });
  this.route('login');
  this.route('index', { path: '/' });
  this.route('waiting-list');
});

export default Router;
