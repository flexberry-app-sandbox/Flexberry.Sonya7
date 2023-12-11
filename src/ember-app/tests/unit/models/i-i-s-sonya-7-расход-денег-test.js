import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-sonya-7-расход-денег', 'Unit | Model | i-i-s-sonya-7-расход-денег', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-sonya-7-клиенты',
    'model:i-i-s-sonya-7-материалы',
    'model:i-i-s-sonya-7-перечень-мат',
    'model:i-i-s-sonya-7-перечень-товаров',
    'model:i-i-s-sonya-7-перечень-услуг',
    'model:i-i-s-sonya-7-поставщики',
    'model:i-i-s-sonya-7-приход-денег',
    'model:i-i-s-sonya-7-расход-денег',
    'model:i-i-s-sonya-7-регистр-оборот',
    'model:i-i-s-sonya-7-состав-товара',
    'model:i-i-s-sonya-7-товары',
    'model:i-i-s-sonya-7-услуги',
    'model:i-i-s-sonya-7-финансисты',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
