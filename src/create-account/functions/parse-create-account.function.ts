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
    firstName: payload.firstName,
    lastName: payload.lastName
  };
}
