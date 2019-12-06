import { Lambda, LambdaConfig, LambdaResponse } from "./interfaces";
import { Customer } from "../core/database/models/Customer.model";
import { database } from "../core/database/services/database.service";
import { lambda, response } from "./functions";

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

export const createCustomerLambda: Lambda = lambda(
  config,
  async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const toSave = Object.assign(new Customer(), { id: "foo" });
    const savedObject = await database().put(toSave);

    console.log(savedObject);

    // Return new tokens, status 201, add optional headers for oauth2
    return response(
      {
        savedObject
      },
      200,
      {
        headers: {
          "Cache-Control": "no-store",
          Pragma: "no-cache"
        }
      }
    ) as LambdaResponse;
  }
);
