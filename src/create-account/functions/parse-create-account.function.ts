import { Struct } from "superstruct";
import { struct } from "../../validation";
import { CreateAccountPayload } from "../interface";

/**
 * Structure of data required for this endpoint
 * @var {Struct}
 */
const validate: Struct = struct({
  firstName: "nonemptystring",
  lastName: "nonemptystring"
});

/**
 * Valides/parses the create account payload
 * @param {any} payload
 * @throws {import('supserstruct').StructError}
 * @return {CreateAccountPayload}
 */
export function parseCreateAccountPayload(payload: any): CreateAccountPayload {
  validate(payload);

  return {
    clientId: payload.client_id,
    clientSecret: payload.client_secret || null,
    resetToken: payload.reset_token,
    password: payload.password
  };
}
