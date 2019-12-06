/**
 * Interface represents an response config object
 */

export interface LambdaConfig {
  /**
   * Name of the lambda function
   * @var {string}
   */
  name: string;

  /**
   * Determines if the lambda should check for and validate
   * @var {?boolean}
   */
  requireClientAuthentication?: boolean;
}
