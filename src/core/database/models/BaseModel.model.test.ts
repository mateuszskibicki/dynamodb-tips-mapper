import { BaseModel } from "./BaseModel.model";

describe("BaseModel", () => {
  it("should be defined and a function", () => {
    expect(BaseModel).toBeDefined();
    expect(typeof BaseModel === "function").toBeTruthy();
  });

  it("should be easy to extend", () => {
    class NewModel extends BaseModel<NewModel> {
      constructor(public key: string) {
        super();
      }
    }

    const InstanceOfObject = new NewModel("value");

    expect(InstanceOfObject instanceof NewModel).toBeTruthy();
    expect(InstanceOfObject.key).toBe("value");
  });
});
