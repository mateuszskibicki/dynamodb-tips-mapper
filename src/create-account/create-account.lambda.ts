import {
  Lambda,
  LambdaConfig,
  LambdaResponse,
  lambda,
  response,
  Customer
} from "../core";

import { createCustomer } from "./";

/**
 * Config for this endpoint
 */
const config: LambdaConfig = { name: "Create Customer" };

/**
 * Endpoint that creates new customer
 * If there is success, update password and return 200
 * if there is an error throws Error
 * @param {APIGatewayEvent} event
 * @param {Context} Context
 * @return {LambdaResponse}
 * @throws {Error}
 */

export const createCustomerLambda: Lambda = lambda(config, async event => {
  const payload: any = event.body ? JSON.parse(event.body) : {};

  const customer: Customer = await createCustomer(payload);

  // Return new tokens, status 201, add optional headers for oauth2
  return response(
    {
      customer
    },
    200,
    {
      headers: {
        "Cache-Control": "no-store",
        Pragma: "no-cache"
      }
    }
  ) as LambdaResponse;
});
