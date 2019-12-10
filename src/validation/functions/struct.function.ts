import { Superstruct, superstruct } from "superstruct";

import { isNonEmptyString } from "./is-non-empty-string.function";

/**
 * Creata a custom struct factory with
 * additional, custom validation
 * @var {Superstruct}
 */
export const struct: Superstruct = superstruct({
  types: {
    nonemptystring: (val): boolean => isNonEmptyString(val)
  }
});
