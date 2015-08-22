import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'th',
  classNameBindings: ['isSorted:active', 'isAsc:asc', 'isDesc:desc'],
  isSorted: Ember.computed('sortProperties', function() {
    return this.get('sortProperties')[0].match(/^[^:]+\s*/)[0] === this.get('key');
  }),
  isAsc: Ember.computed('isSorted', 'sortAscending', function() {
    return this.get('isSorted') && this.get('sortAscending');
  }),
  isDesc: Ember.computed('isSorted', 'sortAscending', function() {
    return this.get('isSorted') && !this.get('sortAscending');
  }),
  click: function() {
    this.sendAction('action', this.get('key'));
  },
  actions: {
    sort: function(property) {
      var prop = this.get(property);
      if (this.get('isSorted') && this.get('sortProperties')[0] === prop){
        prop = this.get('sortAscending') ? prop + ":desc" : prop;
        this.set('sortProperties', [prop]);
        this.toggleProperty('sortAscending');
      } else {
        this.set('sortProperties', [prop]);
        this.set('sortAscending', true);
      }
    }
  }
});
