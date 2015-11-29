import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  artistId: DS.attr('number'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  dateOnWaitingList: DS.attr('date'),
  status: DS.attr('number'),
  local: DS.attr('boolean'),
  location: DS.attr('string'),
  credit: DS.attr('string'),
  want: DS.attr('string'),
  notes: DS.attr('string'),

  appointments: DS.hasMany('appointment', { async: true }),

  statusText: Ember.computed('status', function() {
    switch (this.get('status')) {
      case 1:
        return "Ongoing";
      case 2:
        return "Waiting";
      case 3:
        return "Finished";
      case 4:
        return "On Hold";
    }
  }),

  formattedDateOnWaitingList: Ember.computed('dateOnWaitingList', function() {
    var date = this.get('dateOnWaitingList');
    if(!date) { return "Not currently on list"; }
    return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
  })
});
