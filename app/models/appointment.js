import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  artistId: DS.attr('number'),
  customer: DS.belongsTo('customer'),
  dateScheduled: DS.attr('date'),
  description: DS.attr('string'),
});
