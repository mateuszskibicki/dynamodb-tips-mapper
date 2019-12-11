// import { StructError } from 'superstruct';
import { APIGatewayProxyResult } from "aws-lambda";
import { LambdaConfig, Lambda } from "../interfaces";
import { response } from "../";

/**
 * Default values to use as lambda config
 * @var {Readonly<Partial<LambdaConfig>>}
 */
const defaultLambdaConfig: Readonly<Partial<LambdaConfig>> = Object.freeze({
  requireClientAuthentication: true
});

/**
 * Wraps lambda endpoints in common functionality.
 * @param {LambdaConfig} config
 * @param {Lambda} lambdaFunction
 * @return {Lambda}
 */
export function lambda(config: LambdaConfig, lambdaFunction: Lambda): Lambda {
  // Combine given config with defaults
  const _config: LambdaConfig = { ...defaultLambdaConfig, ...config };

  return async (
    event?,
    context?,
    callback?
  ): Promise<APIGatewayProxyResult> => {
    // Context changes

    try {
      //   const payload: any = JSON.parse(event.body);

      // if (_config.requireClientAuthentication) authenticateClient(payload.client_id, payload.client_secret);

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

        // case UnauthenticatedClientError:
        //   return response(
        //     {
        //       error: "invalid_client",
        //       error_description:
        //         "Client authentication failed, such as if the request contains an invalid client ID or secret."
        //     },
        //     401
        //   );

        // case StructError:
        //   return response(
        //     {
        //       error: "invalid_request",
        //       error_description:
        //         "The request is missing a parameter so the server can’t proceed with the request. This may also be returned if the request includes an unsupported parameter or repeats a parameter."
        //     },
        //     400
        //   );

        // case UnauthenticatedUserError:
        //   return response(
        //     {
        //       error: "invalid_grant",
        //       error_description:
        //         "The authorization code (or user’s password for the password grant type) is invalid or expired. This is also the error you would return if the redirect URL given in the authorization grant does not match the URL provided in this access token request."
        //     },
        //     401
        //   );

        // case UnsupportedGrantTypeError:
        //   return response(
        //     {
        //       error: "unsupported_grant_type",
        //       error_description:
        //         "If a grant type is requested that the authorization server doesn’t recognize, use this code. Note that unknown grant types also use this specific error code rather than using the invalid_request above."
        //     },
        //     400
        //   );

        default:
          /*
           * Log error to CloudWatch Logs
           * console.error(err);
           */

          // console.error(err);

          return response({}, 500);
      }
    }
  };
}
