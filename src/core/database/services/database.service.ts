import { DataMapper } from "@aws/dynamodb-data-mapper";
import { dynamoDb } from "@app/core";

let client: DataMapper;

/**
 * @return {DataMapper}
 */
export function database(): DataMapper {
  if (!client) client = new DataMapper({ client: dynamoDb() }) as DataMapper;

  return client;
}
