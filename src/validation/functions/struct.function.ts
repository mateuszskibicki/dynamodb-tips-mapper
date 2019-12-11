import { Superstruct, superstruct } from "superstruct";
import { isNonEmptyString } from "./is-non-empty-string.function";
import { isEmail } from "./is-email.function";
import { isValidPassword } from "./is-valid-password.function";

/**
 * Creata a custom struct factory with
 * additional, custom validation
 * @var {Superstruct}
 */
export const struct: Superstruct = superstruct({
  types: {
    nonemptystring: (val): boolean => isNonEmptyString(val),
    email: (val): boolean => isEmail(val),
    password: (val): boolean => isValidPassword(val),
    truthy: (val): boolean => !!val
  }
});
