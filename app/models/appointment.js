import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({ 
  artistID: DS.attr('number'),
  customerID: DS.attr('number'),
  dateScheduled: DS.attr('date'),
  description: DS.attr('string')
});
