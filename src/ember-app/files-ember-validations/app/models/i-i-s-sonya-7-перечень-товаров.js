import {
  defineNamespace,
  defineProjections,
  Model as ПереченьТоваровMixin
} from '../mixins/regenerated/models/i-i-s-sonya-7-перечень-товаров';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПереченьТоваровMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
