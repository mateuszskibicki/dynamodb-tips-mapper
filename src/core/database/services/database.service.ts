import { DynamoDB } from "aws-sdk";
import { DataMapper } from "@aws/dynamodb-data-mapper";

import { DatabaseEnum } from "../enum";

let clientDb: DynamoDB;
let client: DataMapper;

/**
 * @return {DataMapper}
 */
export function database() {
  if (!clientDb) {
    clientDb = new DynamoDB({ region: DatabaseEnum.Region });
  }
  if (!client) client = new DataMapper({ client: clientDb });

  return client;
}
