import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипПриходаEnum from '../enums/i-i-s-sonya-7-тип-прихода';

export default FlexberryEnum.extend({
  enum: ТипПриходаEnum,
  sourceType: 'IIS.Sonya_7.ТипПрихода'
});
