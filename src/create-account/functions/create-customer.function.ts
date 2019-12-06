import { Customer, database } from "../../core";

/**
 * Function to create new customer
 * @param {any} payload
 * @return {Promise<Customer>}
 * @throws {Error}
 */
export const createCustomer = async (payload: any): Promise<Customer> => {
  // Create new customer object
  const newCustomer: Customer = {
    id: "boo",
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
