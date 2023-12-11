import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  приходДенег: DS.belongsTo('i-i-s-sonya-7-приход-денег', { inverse: null, async: false }),
  расходДенег: DS.belongsTo('i-i-s-sonya-7-расход-денег', { inverse: null, async: false })
});

export let ValidationRules = {
  приходДенег: {
    descriptionKey: 'models.i-i-s-sonya-7-регистр-оборот.validations.приходДенег.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  расходДенег: {
    descriptionKey: 'models.i-i-s-sonya-7-регистр-оборот.validations.расходДенег.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистрОборотE', 'i-i-s-sonya-7-регистр-оборот', {
    
  });

  modelClass.defineProjection('РегистрОборотL', 'i-i-s-sonya-7-регистр-оборот', {
    
  });
};
