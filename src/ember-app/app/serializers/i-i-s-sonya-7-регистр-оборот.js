import { Serializer as РегистрОборотSerializer } from
  '../mixins/regenerated/serializers/i-i-s-sonya-7-регистр-оборот';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РегистрОборотSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
