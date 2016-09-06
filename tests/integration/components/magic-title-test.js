import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('magic-title', 'Integration | Component | magic title', {
  integration: true
});

test('should update title on button click', function(assert) {
  assert.expect(2); // expecting 2 assertions
  this.render(hbs `{{magic-title}}`); // checks to see if Component has rendered

  assert.equal(this.$('h2').text(), 'Hello World', 'initial text is hello world');
  this.$('button').click();

  assert.equal(this.$('h2').text(), 'This is Magic', 'title changes after click');
});