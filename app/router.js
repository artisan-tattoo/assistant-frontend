import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('customers', function() {
    this.route('new');
  });
  this.route('login');
  this.route('protected');
});

export default Router;
