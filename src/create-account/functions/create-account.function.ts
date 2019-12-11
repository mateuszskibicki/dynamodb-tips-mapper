import { CreateAccountPayload } from "../interface/create-account-payload.interface";
import { Customer, database } from "../../core";

/**
 * Function to create new account
 * @param {CreateAccountPayload} accountData
 * @return {Promise<Customer>}
 * @throws {Error}
 */
export const createAccount = async (
  accountData: CreateAccountPayload
): Promise<Customer> => {
  // Create account object ready to save
  const toSave: Customer = Object.assign(new Customer(), accountData);

  // Save customer
  const savedObject: Customer = await database().put(toSave);

  // Return customer
  return savedObject;
};
