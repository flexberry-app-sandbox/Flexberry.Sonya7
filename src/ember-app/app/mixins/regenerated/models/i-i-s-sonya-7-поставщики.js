import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  адрес: DS.attr('string'),
  наименование: DS.attr('string'),
  номерТелефона: DS.attr('number'),
  почта: DS.attr('string')
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-sonya-7-поставщики.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-sonya-7-поставщики.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-sonya-7-поставщики.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-sonya-7-поставщики.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  почта: {
    descriptionKey: 'models.i-i-s-sonya-7-поставщики.validations.почта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПоставщикиE', 'i-i-s-sonya-7-поставщики', {
    iD: attr('ID', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    номерТелефона: attr('Номер телефона', { index: 2 }),
    адрес: attr('Адрес', { index: 3 }),
    почта: attr('Почта', { index: 4 })
  });

  modelClass.defineProjection('ПоставщикиL', 'i-i-s-sonya-7-поставщики', {
    iD: attr('ID', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    номерТелефона: attr('Номер телефона', { index: 2 }),
    адрес: attr('Адрес', { index: 3 }),
    почта: attr('Почта', { index: 4 })
  });
};
