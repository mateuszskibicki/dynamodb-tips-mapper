import { LambdaResponse, ResponseOptions } from "../interfaces";

/**
 * Returns a response based on data and status code
 *
 * @param {object} data
 * @param {number} statusCode
 * @param {ResponseOptions} options
 *
 * @returns {LambdaResponse}
 */
export function response(
  data: object,
  statusCode: number,
  options?: ResponseOptions
): LambdaResponse {
  // Response object
  const res: LambdaResponse = {
    body: JSON.stringify(data),
    statusCode
  };

  // Check if optional and headers exist, if yes attach them to the response
  if (options && options.headers) res.headers = options.headers;

  // Return lambda response
  return res;
}
