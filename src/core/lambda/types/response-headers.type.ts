/**
 * Type represents an optional headers object on lambda response
 */

export type ResponseHeaders = {
  /**
   * Any key value pair
   * @var {any}
   */
  [headerName: string]: string;
};
