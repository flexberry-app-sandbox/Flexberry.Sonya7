import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КлиентыMixin
} from '../mixins/regenerated/models/i-i-s-sonya-7-клиенты';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КлиентыMixin, Validations, {
});

defineProjections(Model);

export default Model;
