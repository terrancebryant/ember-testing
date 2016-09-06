import Ember from 'ember';
export default Ember.Object.extend({
  foo: 'bar',
  count: 0,
  other: 'no',

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
  }),

  doSomething: Ember.observer('foo', function() {
    this.set('other', 'yes');
  })
});
