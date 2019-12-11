import { attribute, table } from "@aws/dynamodb-data-mapper-annotations";
import { DatabaseEnum } from "../";
import { BaseModel } from "./BaseModel.model";

@table(DatabaseEnum.Table)
export class Customer extends BaseModel<Customer> {
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
}
