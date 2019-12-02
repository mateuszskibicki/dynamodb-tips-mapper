import { Customer } from "./../../core/database/models/Customer.model";
import {
  APIGatewayProxyHandler,
  APIGatewayProxyEvent,
  Context,
  APIGatewayProxyResult
} from "aws-lambda";

export const hello: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  context.callbackWaitsForEmptyEventLoop = false;

  const newuser: Customer = new Customer({
    id: "sadbadbakdbaskdb",
    type: "hello",
    createdAt: new Date()
  });
  console.log(newuser);

  console.log(new Customer());

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
        input: event
      },
      null,
      2
    )
  };
};
