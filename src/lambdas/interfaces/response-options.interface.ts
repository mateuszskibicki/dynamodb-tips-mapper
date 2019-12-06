import { ResponseHeaders } from "../types/response-headers.type";
/**
 * Interface represents an options object (3rd param) in response function
 */

export interface ResponseOptions {
  /**
   * Optional headers on the response
   * @var {string}
   */
  headers?: ResponseHeaders;
}
