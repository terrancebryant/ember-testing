import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

// stub location service
const locationStub = Ember.Service.extend({
  city: 'New York',
  country: 'USA',
  currentLocation: {
    x: 1234,
    y: 5678
  },

  getCurrentCity() {
    return this.get('city');
  },
  getCurrentCountry() {
    return this.get('country');
  }
});

moduleForComponent('location-indicator', 'Integration | Component | location indicator', {
  integration: true,

  beforeEach: function () {
    this.register('service:location-service', locationStub);
    // Calling inject puts the service instance in the test's context,
    // making it accessible as "locationService" within each test
    this.inject.service('location-service', { as: 'locationService' });
  }
});


test('should reveal current location', function(assert) {
  this.render(hbs `{{location-indicator}}`);
  assert.equal(this.$().text().trim(), 'You currently are located in New York, USA');
});


test('should change displayed location when current location changes', function(assert) {
  this.render(hbs `{{location-indicator}}`);
  assert.equal(this.$().text().trim(), 'You currently are located in New York, USA');
  this.set('locationService.city', 'Beijing');
  this.set('locationService.country', 'China');
  this.set('locationService.currentLocation',  { x: 11111, y: 222222 });
  assert.equal(this.$().text().trim(), 'You currently are located in Beijing, China', 'location display should change');
});
