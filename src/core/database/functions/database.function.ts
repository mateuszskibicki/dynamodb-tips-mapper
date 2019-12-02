import { DatabaseEnum } from "../enum";
import * as DynamoDB from "aws-sdk/clients/dynamodb";

let client: DynamoDB;

/**
 * @return {DynamoDb}
 */
export function dynamoDb(): DynamoDB {
  if (!client) {
    client = new DynamoDB({ region: DatabaseEnum.Region });
  }
  return client;
}
