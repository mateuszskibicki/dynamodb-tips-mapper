/**
 * Interface represents a main lambda function
 */

import {
  APIGatewayEvent,
  Callback,
  APIGatewayProxyHandler,
  Context,
  APIGatewayProxyResult
} from "aws-lambda";

export interface Lambda {
  /**
   * Lambda function
   * @returns {Promise<APIGatewayProxyResult>}
   */
  (
    /**
     * Event with all most important informations about request like payload
     * @var {?APIGatewayEvent} event
     */
    event?: APIGatewayEvent,

    /**
     * Context object
     * @var {?Context} context
     */
    context?: Context,

    /**
     * Callback (will not bu used because of new lambda syntax)
     * @var {?Callback<APIGatewayProxyHandler>} callback
     */
    callback?: Callback<APIGatewayProxyHandler>
  ): Promise<APIGatewayProxyResult>;
}
