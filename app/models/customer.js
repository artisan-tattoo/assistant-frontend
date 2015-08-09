import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  date-on-waiting-list: DS.attr('date'),
  status: DS.attr('number'),
  local: DS.attr('boolean'),
  artist-id: DS.attr('number'),
  location: DS.attr('string'),
  credit: DS.attr('string'),
  want: DS.attr('string'),
  notes: DS.attr('string'),
});
