import { createAccountLambda } from "../create-account";
import { database } from "../core";
import { APIGatewayProxyEvent } from "aws-lambda";

describe("Lambda - create-account", () => {
  const request: any = Object.freeze({
    firstName: "firstNamne",
    lastName: "lastName"
  });

  afterEach(() => jest.clearAllMocks());

  it("should be defined and a function", () => {
    expect(createAccountLambda).toBeDefined();
    expect(typeof createAccountLambda === "function").toBeTruthy();
  });

  it("calles parse funtion with correct payload", async () => {
    const spy = jest.spyOn(
      require("../create-account"),
      "parseCreateAccountPayload"
    );

    await createAccountLambda({
      body: JSON.stringify(request)
    } as APIGatewayProxyEvent);

    expect(spy).toHaveBeenCalledWith(request);
  });

  it("calles createAccount and returns new account", async () => {
    jest.spyOn(database(), "put").mockImplementation(async item => item);
    const spy = jest.spyOn(require("../create-account"), "createAccount");

    await createAccountLambda({
      body: JSON.stringify(request)
    } as APIGatewayProxyEvent);

    expect(spy).toHaveBeenCalledWith(request);
  });

  it("returns response object when success", async () => {
    jest.spyOn(database(), "put").mockImplementation(async item => item);

    const response = await createAccountLambda({
      body: JSON.stringify(request)
    } as APIGatewayProxyEvent);

    expect(response.statusCode).toEqual(200);
    expect(response.headers).toEqual(expect.any(Object));
    expect(JSON.parse(response.body)).toEqual(
      expect.objectContaining({
        account: expect.any(Object)
      })
    );
  });
});
