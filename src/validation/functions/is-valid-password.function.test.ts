import { isValidPassword } from './is-valid-password.function';

describe('isValidPassword', () => {

    it('returns true for a valid password', () => {

        const goodPasswords: string[] = [
            'Abcdef!',
            'Abcde1',
            'QuéTal?',
            'Žmonės?',
            'Žmones?',
            'Zmonės?'
        ];

        for (const email of goodPasswords) {

            expect(isValidPassword(email)).toBe(true);

        }

    });

    it('returns false for an invalid password', () => {

        const badPasswords: string[] = [
            'abcd', // Less than 6 chars
            'ABCDE!', // No lower case
            'abcdef!', // No upper case
            'Abcdefg' // No number or special charss
        ];

        for (const email of badPasswords) {

            expect(isValidPassword(email)).toBe(false);

        }

    });

});
