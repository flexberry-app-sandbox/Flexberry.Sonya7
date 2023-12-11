import {
  defineNamespace,
  defineProjections,
  Model as ФинансистыMixin
} from '../mixins/regenerated/models/i-i-s-sonya-7-финансисты';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ФинансистыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
