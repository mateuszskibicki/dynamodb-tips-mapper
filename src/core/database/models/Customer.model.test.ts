import { Customer } from "./Customer.model";

describe("Customer", () => {
  it("should be defined and a function", () => {
    expect(Customer).toBeDefined();
    expect(typeof Customer === "function").toBeTruthy();
  });

  it("should create new Customer object", () => {
    const InstanceOfObject = new Customer({
      firstName: "Name",
      lastName: "Lastname"
    });

    expect(InstanceOfObject instanceof Customer).toBeTruthy();
    expect(InstanceOfObject.firstName).toBe("Name");
    expect(InstanceOfObject.lastName).toBe("Lastname");
  });
});
