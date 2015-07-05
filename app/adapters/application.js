import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    namespace: 'v1',
    // host: 'https://api.artisanassistant.com'
    host: 'http://localhost:8080'
});
