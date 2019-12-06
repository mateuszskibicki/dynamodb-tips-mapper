/**
 * Interface represents a response
 */

export interface LambdaResponse {
  /**
   * Body of the response
   * @var {string}
   */
  body: string;

  /**
   * Status Code of the response
   * @var {number}
   */
  statusCode: number;

  /**
   * Optional headers object
   * @var {object}
   */
  headers?: { [headerName: string]: string };
}
