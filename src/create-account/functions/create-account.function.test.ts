import { Customer } from "./../../core/database/models/Customer.model";
import { createAccount } from "./create-account.function";
import { database } from "../../core";

/**
|--------------------------------------------------
| Test file for create account function
|--------------------------------------------------
*/

describe("createAccount", () => {
  const payload: Partial<Customer> = {
    firstName: "firstNamne",
    lastName: "lastName"
  };

  afterEach(() => jest.clearAllMocks());

  it("should be defined and a function", () => {
    expect(createAccount).toBeDefined();
    expect(typeof createAccount === "function").toBeTruthy();
  });

  it("calles parse funtion with correct payload", async () => {
    jest.spyOn(database(), "put").mockImplementation(async item => item);
    const spy = jest.spyOn(
      require("./parse-create-account.function"),
      "parseCreateAccountPayload"
    );

    await createAccount(payload);

    expect(spy).toHaveBeenCalledWith(payload);
  });

  it("should return ready value", async () => {
    const spy = jest
      .spyOn(database(), "put")
      .mockImplementation(async item => item);

    await createAccount(payload);

    expect(spy).toHaveBeenCalledWith(payload);
  });
});
