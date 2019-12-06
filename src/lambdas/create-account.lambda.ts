import { Lambda } from "./interfaces/lambda.interface";
import { Customer } from "../core/database/models/Customer.model";
import { database } from "../core/database/services/database.service";

export const createCustomerLambda: Lambda = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const toSave = Object.assign(new Customer(), { id: "foo" });
  const savedObject = await database().put(toSave);

  console.log(savedObject);

  return {
    statusCode: 200,
    body: JSON.stringify({ savedObject })
  };
};
