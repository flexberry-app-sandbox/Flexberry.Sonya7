import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  единицы: DS.attr('i-i-s-sonya-7-единицы'),
  количество: DS.attr('number'),
  материалы: DS.belongsTo('i-i-s-sonya-7-материалы', { inverse: null, async: false }),
  товары: DS.belongsTo('i-i-s-sonya-7-товары', { inverse: 'составТовара', async: false })
});

export let ValidationRules = {
  единицы: {
    descriptionKey: 'models.i-i-s-sonya-7-состав-товара.validations.единицы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-sonya-7-состав-товара.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  материалы: {
    descriptionKey: 'models.i-i-s-sonya-7-состав-товара.validations.материалы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  товары: {
    descriptionKey: 'models.i-i-s-sonya-7-состав-товара.validations.товары.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставТовараE', 'i-i-s-sonya-7-состав-товара', {
    количество: attr('Количество', { index: 0 }),
    единицы: attr('Единицы', { index: 1 })
  });
};
