import {
  Lambda,
  LambdaConfig,
  LambdaResponse,
  lambda,
  response,
  Customer
} from "@app/core";
import {
  createAccount,
  parseCreateAccountPayload,
  CreateAccountPayload
} from "@app/create-account";

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

export const createAccountLambda: Lambda = lambda(
  config,
  async (event): Promise<LambdaResponse> => {
    // parse/validate payload, if error Struct will throw StructError
    const payload: CreateAccountPayload = parseCreateAccountPayload(
      JSON.parse(event.body)
    );

    // create new account
    const account: Customer = await createAccount(payload);

    // Return response
    return response(
      {
        account
      },
      200,
      {
        headers: {
          "Cache-Control": "no-store",
          Pragma: "no-cache"
        }
      }
    );
  }
);
