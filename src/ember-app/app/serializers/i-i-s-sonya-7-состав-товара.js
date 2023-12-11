import { Serializer as СоставТовараSerializer } from
  '../mixins/regenerated/serializers/i-i-s-sonya-7-состав-товара';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СоставТовараSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
