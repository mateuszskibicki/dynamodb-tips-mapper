// import { StructError } from 'superstruct';
import { APIGatewayProxyResult } from "aws-lambda";
import { LambdaConfig, Lambda } from "../interfaces";
import { response } from "../";

/**
 * Default values to use as lambda config
 * @var {Readonly<Partial<LambdaConfig>>}
 */
// const defaultLambdaConfig: Readonly<Partial<LambdaConfig>> = Object.freeze({
//   requireClientAuthentication: true
// });

/**
 * Wraps lambda endpoints in common functionality.
 * @param {LambdaConfig} config
 * @param {Lambda} lambdaFunction
 * @return {Lambda}
 */
export function lambda(config: LambdaConfig, lambdaFunction: Lambda): Lambda {
  // Combine given config with defaults
  // const _config: LambdaConfig = { ...defaultLambdaConfig, ...config };

  return async (
    event?,
    context?,
    callback?
  ): Promise<APIGatewayProxyResult> => {
    try {
      return await lambdaFunction(event, context, callback);
    } catch (err) {
      switch (err.constructor) {
        // case AccountAlreadyExists:
        //   return response(
        //     {
        //       error: "account_already_exists",
        //       error_description:
        //         "An account already exists with this email address."
        //     },
        //     400
        //   );

        default:
          return response({}, 500);
      }
    }
  };
}
