import { Struct, StructError } from "superstruct";
import { struct } from "./struct.function";

describe("struct", () => {
  it("should be defined and a function", () => {
    expect(struct).toBeDefined();
    expect(typeof struct === "function").toBeTruthy();
  });

  describe("struct - nonemptystring", () => {
    it("should throw StructError when nonemptystring is falsy", () => {
      const validate: Struct = struct({
        emptyString: "nonemptystring"
      });

      expect(() => validate({ emptyString: "" })).toThrow(StructError);
    });

    it("should not throw any errors", () => {
      const validate: Struct = struct({
        emptyString: "nonemptystring"
      });

      expect(validate({ emptyString: "string" })).toStrictEqual({
        emptyString: "string"
      });

      expect(() => validate({ emptyString: "string" })).not.toThrow(
        StructError
      );
    });
  });

  describe("struct - email", () => {
    it("should throw StructError when email validation is falsy", () => {
      const validate: Struct = struct({
        email: "email"
      });

      expect(() => validate({ email: "123" })).toThrow(StructError);
    });

    it("should not throw any errors", () => {
      const validate: Struct = struct({
        email: "email"
      });

      expect(validate({ email: "email@email.com" })).toStrictEqual({
        email: "email@email.com"
      });

      expect(() => validate({ email: "email@email.com" })).not.toThrow(
        StructError
      );
    });
  });

  describe("struct - password", () => {
    it("should throw StructError when password validation is falsy", () => {
      const validate: Struct = struct({
        password: "password"
      });

      expect(() => validate({ password: "123" })).toThrow(StructError);
    });

    it("should not throw any errors", () => {
      const validate: Struct = struct({
        password: "password"
      });

      expect(validate({ password: "Password123!!&" })).toStrictEqual({
        password: "Password123!!&"
      });

      expect(() => validate({ password: "Password123!!&" })).not.toThrow(
        StructError
      );
    });
  });

  describe("struct - truthy", () => {
    it("should throw StructError when truthy validation is falsy", () => {
      const validate: Struct = struct({
        value: "truthy"
      });

      expect(() => validate({ value: false })).toThrow(StructError);
    });

    it("should not throw any errors", () => {
      const validate: Struct = struct({
        value: "truthy"
      });

      expect(validate({ value: "123" })).toStrictEqual({
        value: "123"
      });

      expect(() => validate({ value: "123" })).not.toThrow(StructError);
    });
  });

  describe("struct - all together", () => {
    it("should throw StructError when validation is falsy", () => {
      const validate: Struct = struct({
        name: "nonemptystring",
        password: "password"
      });

      expect(() => validate({ name: "", password: "123" })).toThrow(
        StructError
      );
    });

    it("should not throw any errors", () => {
      const validate: Struct = struct({
        name: "nonemptystring",
        password: "password"
      });

      expect(
        validate({ name: "Mateusz", password: "Password123" })
      ).toStrictEqual({
        name: "Mateusz",
        password: "Password123"
      });

      expect(() =>
        validate({ name: "Mateusz", password: "Password123" })
      ).not.toThrow(StructError);
    });
  });
});
