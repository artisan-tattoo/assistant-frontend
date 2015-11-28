import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  artistId: DS.attr('number'),
  customerId: DS.attr('number'),
  dateScheduled: DS.attr('date'),
  description: DS.attr('string'),
});
