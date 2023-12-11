import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  материалы: DS.belongsTo('i-i-s-sonya-7-материалы', { inverse: null, async: false }),
  расходДенег: DS.belongsTo('i-i-s-sonya-7-расход-денег', { inverse: 'переченьМат', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-sonya-7-перечень-мат.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  материалы: {
    descriptionKey: 'models.i-i-s-sonya-7-перечень-мат.validations.материалы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  расходДенег: {
    descriptionKey: 'models.i-i-s-sonya-7-перечень-мат.validations.расходДенег.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПереченьМатE', 'i-i-s-sonya-7-перечень-мат', {
    количество: attr('Количество', { index: 0 })
  });
};
