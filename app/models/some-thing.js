import Ember from 'ember';
export default Ember.Object.extend({
  foo: 'bar',
  count: 0,

  testMethod() {
    this.set('foo', 'baz');
  },

  calc() {
    this.incrementProperty('count');
    let count = this.get('count');
    return `count: ${count}`;
  },

  computedFoo: Ember.computed('foo', function() {
    const foo = this.get('foo');
    return `computed ${foo}`;
  })
});
