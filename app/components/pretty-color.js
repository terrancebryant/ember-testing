import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['style', 'alt'],
  name: 'red',

  style: Ember.computed('name', function() {
    const name = this.get('name');
    return `color: ${name}`;
  })
});
