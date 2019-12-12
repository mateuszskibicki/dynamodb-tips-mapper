import {
  attribute,
  table,
  rangeKey
} from "@aws/dynamodb-data-mapper-annotations";
import { DatabaseEnum } from "../";
import { BaseModel } from "./BaseModel.model";

@table(DatabaseEnum.Table)
export class Customer extends BaseModel<Customer> {
  /**
   * @var {Date} createdAt
   */
  @rangeKey({ defaultProvider: () => new Date() })
  createdAt: Date;

  /**
   * @var {Date} updatedAt
   */
  @attribute({ defaultProvider: () => new Date() })
  updatedAt: Date;

  /**
   * @var {string} firstName
   */
  @attribute()
  firstName: string;

  /**
   * @var {string} lastName
   */
  @attribute()
  lastName: string;

  /**
   * @var {?boolean} isPremium
   */
  @attribute()
  isPremium?: boolean;

  /**
   * @var {?boolean} ifVip
   */
  @attribute()
  ifVip?: boolean;

  /**
   * Alias of ID
   * @var {string}
   */
  public get id(): string {
    return this.id;
  }
}
