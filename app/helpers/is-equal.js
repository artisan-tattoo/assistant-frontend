import Ember from 'ember';
export default Ember.Helper.helper(function equalHelper(params) {
  return params[0] === params[1];
});
