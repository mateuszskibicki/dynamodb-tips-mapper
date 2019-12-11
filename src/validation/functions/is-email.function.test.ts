import { isEmail } from './is-email.function';

describe('isEmail', () => {

    it('returns true for a well formed email', () => {

        expect(isEmail('test@prettylittlething.com')).toBe(true);

    });

    it('returns false for an invalid email', () => {

        const badEmails = [
            'not an email',
            ' ilovewhitespace@prettylittlething.com ',
            ' missing_a_doman'
        ];

        for (const email of badEmails) {

            expect(isEmail(email)).toBe(false);

        }

    });

});
