import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  банк: DS.attr('i-i-s-sonya-7-банк'),
  бИК: DS.attr('number'),
  дата: DS.attr('date'),
  иНН: DS.attr('number'),
  сумма: DS.attr('decimal'),
  счет: DS.attr('number'),
  поставщики: DS.belongsTo('i-i-s-sonya-7-поставщики', { inverse: null, async: false }),
  финансисты: DS.belongsTo('i-i-s-sonya-7-финансисты', { inverse: null, async: false }),
  переченьМат: DS.hasMany('i-i-s-sonya-7-перечень-мат', { inverse: 'расходДенег', async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-sonya-7-расход-денег.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  банк: {
    descriptionKey: 'models.i-i-s-sonya-7-расход-денег.validations.банк.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  бИК: {
    descriptionKey: 'models.i-i-s-sonya-7-расход-денег.validations.бИК.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-sonya-7-расход-денег.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-sonya-7-расход-денег.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-sonya-7-расход-денег.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  счет: {
    descriptionKey: 'models.i-i-s-sonya-7-расход-денег.validations.счет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  поставщики: {
    descriptionKey: 'models.i-i-s-sonya-7-расход-денег.validations.поставщики.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  финансисты: {
    descriptionKey: 'models.i-i-s-sonya-7-расход-денег.validations.финансисты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  переченьМат: {
    descriptionKey: 'models.i-i-s-sonya-7-расход-денег.validations.переченьМат.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасходДенегE', 'i-i-s-sonya-7-расход-денег', {
    iD: attr('ID', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    банк: attr('Банк', { index: 2 }),
    счет: attr('Счет', { index: 3 }),
    иНН: attr('ИНН', { index: 4 }),
    бИК: attr('БИК', { index: 5 }),
    финансисты: belongsTo('i-i-s-sonya-7-финансисты', 'Финансист ФИО', {
      фИО: attr('Финансист ФИО', { index: 6 })
    }, { index: -1, hidden: true }),
    поставщики: belongsTo('i-i-s-sonya-7-поставщики', 'Поставщик', {
      наименование: attr('Поставщик', { index: 7 })
    }, { index: -1, hidden: true }),
    сумма: attr('Сумма', { index: 8 }),
    переченьМат: hasMany('i-i-s-sonya-7-перечень-мат', 'Перечень материалов', {
      количество: attr('Количество', { index: 0 })
    })
  });

  modelClass.defineProjection('РасходДенегL', 'i-i-s-sonya-7-расход-денег', {
    iD: attr('ID', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    банк: attr('Банк', { index: 2 }),
    счет: attr('Счет', { index: 3 }),
    иНН: attr('ИНН', { index: 4 }),
    бИК: attr('БИК', { index: 5 }),
    финансисты: belongsTo('i-i-s-sonya-7-финансисты', 'Финансист ФИО', {
      фИО: attr('Финансист ФИО', { index: 6 })
    }, { index: -1, hidden: true }),
    поставщики: belongsTo('i-i-s-sonya-7-поставщики', 'Поставщик', {
      наименование: attr('Поставщик', { index: 7 })
    }, { index: -1, hidden: true }),
    сумма: attr('Сумма', { index: 8 })
  });
};
