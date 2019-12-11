import { StructError } from "superstruct";
import { Customer } from "../../core";
import { parseCreateAccountPayload } from "./parse-create-account.function";

/**
|--------------------------------------------------
| Test file for parsing create account payload
|--------------------------------------------------
*/

describe("parseCreateAccountPayload", () => {
  const payload: Partial<Customer> = {
    firstName: "firstNamne",
    lastName: "lastName"
  };

  afterEach(() => jest.clearAllMocks());

  it("should be defined and a function", () => {
    expect(parseCreateAccountPayload).toBeDefined();
    expect(typeof parseCreateAccountPayload === "function").toBeTruthy();
  });

  it("will throw an instance of StructError if validation fails", () => {
    expect(() => parseCreateAccountPayload({})).toThrow(StructError);

    expect(() =>
      parseCreateAccountPayload({ ...payload, firstName: "" })
    ).toThrow(StructError);
  });

  it("can parse a valid payload", () => {
    const returnValue = parseCreateAccountPayload(payload);

    expect(returnValue).toEqual({
      firstName: "firstNamne",
      lastName: "lastName"
    });
  });
});
