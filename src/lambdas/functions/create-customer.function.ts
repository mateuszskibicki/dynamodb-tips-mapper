import { Customer } from "./../../core/database/models/Customer.model";
import { database } from "../../core/database/services/database.service";
import {
  APIGatewayProxyHandler,
  APIGatewayProxyEvent,
  Context,
  APIGatewayProxyResult
} from "aws-lambda";

export const createCustomerLambda: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  context.callbackWaitsForEmptyEventLoop = false;

  const toSave = Object.assign(new Customer(), { id: "foo" });
  const savedObject = await database().put(toSave);

  console.log(savedObject);

  return {
    statusCode: 200,
    body: JSON.stringify({ savedObject })
  };
};
