import {
  APIGatewayEvent,
  APIGatewayProxyHandler,
  Context,
  APIGatewayProxyResult
} from "aws-lambda";

export interface Lambda {
  (event?: APIGatewayEvent, context?: Context): Promise<APIGatewayProxyResult>;
}
