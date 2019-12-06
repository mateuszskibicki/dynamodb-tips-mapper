import {
  attribute,
  hashKey,
  rangeKey,
  table
} from "@aws/dynamodb-data-mapper-annotations";
import { DatabaseEnum } from "../";

@table(DatabaseEnum.Table)
export class Customer {
  @hashKey()
  id: string;

  @rangeKey({ defaultProvider: () => new Date() })
  createdAt?: Date;

  @attribute()
  isPremium?: boolean;

  @attribute()
  ifVip?: boolean;

  @attribute()
  firstName?: string;

  @attribute()
  lastName?: string;
}
