import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pretty-color', 'Integration | Component | pretty color', {
  integration: true
});


test('should change color', function(assert) {
  assert.expect(2);

  this.set('colorValue', 'red');
  this.render(hbs`{{pretty-color name=colorValue}}`);

  assert.equal(this.$('div').attr('style'), 'color: red', 'starts as red');

  this.set('colorValue', 'blue');
  assert.equal(this.$('div').attr('style'), 'color: blue', 'updates to blue');
});
