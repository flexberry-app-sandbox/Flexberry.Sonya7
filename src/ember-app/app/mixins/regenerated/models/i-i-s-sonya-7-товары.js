import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  наименование: DS.attr('string'),
  стоимость: DS.attr('decimal'),
  составТовара: DS.hasMany('i-i-s-sonya-7-состав-товара', { inverse: 'товары', async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-sonya-7-товары.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-sonya-7-товары.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-sonya-7-товары.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  составТовара: {
    descriptionKey: 'models.i-i-s-sonya-7-товары.validations.составТовара.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварыE', 'i-i-s-sonya-7-товары', {
    iD: attr('ID', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 }),
    составТовара: hasMany('i-i-s-sonya-7-состав-товара', 'Состав товара', {
      количество: attr('Количество', { index: 0 }),
      единицы: attr('Единицы', { index: 1 })
    })
  });

  modelClass.defineProjection('ТоварыL', 'i-i-s-sonya-7-товары', {
    iD: attr('ID', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    стоимость: attr('Стоимость', { index: 2 })
  });
};
