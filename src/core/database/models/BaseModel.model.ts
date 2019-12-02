export type InterfaceOf<T> = {
  [K in keyof T]: T[K];
};

/**
 * Base model to be extended by all models in this app
 * @class
 */
export abstract class BaseModel<T> {
  /**
   * @var {string}
   */
  public abstract id: string;

  /**
   * @param {?Partial<InterfaceOf<T>>} args   Optional parameters which which to initialise this model
   */
  constructor(args?: Partial<InterfaceOf<T>>) {
    if (!args) return;

    for (const [k, v] of Object.entries(args)) {
      this[k] = v;
    }
  }
}
