import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:i-i-s-sonya-7-регистр-оборот-e', 'Unit | Controller | i-i-s-sonya-7-регистр-оборот-e', {
  // Specify the other units that are required for this test.
  needs: [
    'controller:advlimit-dialog',
    'controller:colsconfig-dialog',
    'controller:flexberry-file-view-dialog',
    'controller:lookup-dialog',
    'controller:filters-dialog',
    'service:detail-interaction',
    'service:objectlistview-events',
    'service:user-settings',
    'service:app-state',
    'service:adv-limit',
    'service:lookup-events',
  ],
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
