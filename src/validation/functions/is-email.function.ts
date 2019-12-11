/**
 * Determines if the given string is a valid email
 * @param {string} val
 * @return {boolean}
 */
export function isEmail(val: string): boolean {

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return !!val && !!val.match(regex);

}
