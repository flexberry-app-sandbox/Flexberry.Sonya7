import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-sonya-7-товары', 'Unit | Serializer | i-i-s-sonya-7-товары', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-sonya-7-товары',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-sonya-7-банк',
    'transform:i-i-s-sonya-7-единицы',
    'transform:i-i-s-sonya-7-тип-прихода',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
