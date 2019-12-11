/**
 * Determines if the given string is a valid password.
 * To be valid it must:
 *  - be >= 6 chars
 *  - contain 1 uppercase
 *  - contain 1 lowercase
 *  - contain either 1 number or special char
 * @param {string} val
 * @return {boolean}
 */
export function isValidPassword(val: string): boolean {

    return !!val
        && val.length >= 6
        && !!val.match(/\p{Lowercase_Letter}/u) // 1 unicode lowercase letter
        && !!val.match(/\p{Uppercase_Letter}/u) // 1 unicode uppercase letter
        && !!val.match(/[!@#$%^&*()_+-=\[\]{};':"\\|,.<>\/?\d]/u); // 1 special character or number

}
