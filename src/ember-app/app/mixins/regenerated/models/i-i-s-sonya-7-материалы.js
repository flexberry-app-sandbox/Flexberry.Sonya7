import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  единицы: DS.attr('i-i-s-sonya-7-единицы'),
  марка: DS.attr('string'),
  наименование: DS.attr('string'),
  стоимость: DS.attr('decimal')
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-sonya-7-материалы.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  единицы: {
    descriptionKey: 'models.i-i-s-sonya-7-материалы.validations.единицы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  марка: {
    descriptionKey: 'models.i-i-s-sonya-7-материалы.validations.марка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-sonya-7-материалы.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-sonya-7-материалы.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МатериалыE', 'i-i-s-sonya-7-материалы', {
    iD: attr('ID', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    марка: attr('Марка', { index: 2 }),
    единицы: attr('Единицы', { index: 3 }),
    стоимость: attr('Стоимость', { index: 4 })
  });

  modelClass.defineProjection('МатериалыL', 'i-i-s-sonya-7-материалы', {
    iD: attr('ID', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    марка: attr('Марка', { index: 2 }),
    единицы: attr('Единицы', { index: 3 }),
    стоимость: attr('Стоимость', { index: 4 })
  });
};
