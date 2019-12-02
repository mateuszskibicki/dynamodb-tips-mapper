import * as DynamoDB from "aws-sdk/clients/dynamodb";
import { DatabaseEnum } from "@app/core";

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
