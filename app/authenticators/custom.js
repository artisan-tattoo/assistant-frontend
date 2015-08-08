import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

export default Base.extend({
  tokenEndpoint: 'http://localhost:8080/sessions/create',
  restore: function(data) {
    return new Ember.RSVP.Promise(function (resolve, reject) {
      if (!Ember.isEmpty(data.session_name)) {
        resolve(data);
      }
      else {
        reject();
      }
    });
  },

  authenticate: function(options) { 
    var self = this;
    return new Ember.RSVP.Promise(function(resolve, reject) { 
    Ember.$.ajax({ 
      url: self.tokenEndpoint, 
      type: 'POST', 
      data: JSON.stringify({
          username: options.identification,
          password: options.password
      }),
      contentType: 'application/json;charset=utf-8',
      dataType: 'json' 
    }).then(function(response) { 
      Ember.run(function() { 
        resolve({ token: response.id_token }); 
      }); 
    }, function(xhr) { 
      var response = JSON.parse(xhr.responseText); 
      Ember.run(function() { 
        reject(response.error); 
      }); 
    }); 
  }); 
}, 

  invalidate: function() {
    console.log('invalidate...');
    return Ember.RSVP.resolve();
  }
});
