import { createAccount } from "./create-account.function";
import { database } from "../../core";

/**
|--------------------------------------------------
| Test file for create account function
|--------------------------------------------------
*/

describe("createAccount", () => {
  const payload = {
    firstName: "firstNamne",
    lastName: "lastName"
  };

  afterEach(() => jest.clearAllMocks());

  it("should be defined and a function", () => {
    expect(createAccount).toBeDefined();
    expect(typeof createAccount === "function").toBeTruthy();
  });

  it("should return ready value", async () => {
    const spy = jest
      .spyOn(database(), "put")
      .mockImplementation(async item => item);

    await createAccount(payload);

    expect(spy).toHaveBeenCalledWith(payload);
  });
});
