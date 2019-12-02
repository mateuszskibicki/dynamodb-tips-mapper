import {
  attribute,
  hashKey,
  rangeKey,
  table
} from "@aws/dynamodb-data-mapper-annotations";
import { CustomerType, DatabaseEnum } from "@app/core";

@table(DatabaseEnum.Table)
export class Customer {
  /**
   * @var {string}
   */
  @hashKey()
  public id: string;

  /**
   * @var {CustomerType}
   */
  @rangeKey()
  @attribute()
  public readonly type: CustomerType;

  /**
   * @var {string}
   */
  @attribute()
  public firstName?: string;

  /**
   * @var {string}
   */
  @attribute()
  public lastName?: string;

  /**
   * @var {Date}
   */
  @attribute()
  public createdAt: Date;

  /**
   * @var {Date}
   */
  @attribute()
  public updatedAt?: Date;
}
