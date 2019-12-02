import {
  attribute,
  hashKey,
  rangeKey,
  table
} from "@aws/dynamodb-data-mapper-annotations";
import { DatabaseEnum } from "../";
import { BaseModel } from "./BaseModel.model";
@table(DatabaseEnum.Table)
export class Customer extends BaseModel<Customer> {
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
  public readonly type: string;

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
  @attribute({ defaultProvider: () => new Date() })
  public createdAt: Date;

  /**
   * @var {Date}
   */
  @attribute()
  public updatedAt?: Date;
}
