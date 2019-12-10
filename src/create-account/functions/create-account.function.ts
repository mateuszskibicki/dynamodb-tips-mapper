import { Customer, database } from "../../core";

/**
 * Function to create new account
 * @param {any} payload
 * @return {Promise<Customer>}
 * @throws {Error}
 */
export const createAccount = async (payload: any): Promise<Customer> => {
  // Create new account object
  const newCustomer: Partial<Customer> = {
    firstName: payload.firstName,
    lastName: payload.lastName
  };

  // Create customer object ready to save
  const toSave: Customer = Object.assign(new Customer(), newCustomer);

  // Save customer
  const savedObject: Customer = await database().put(toSave);

  // Return customer
  return savedObject;
};
