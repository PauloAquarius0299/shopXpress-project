import {validateEmail} from './email';

describe('Validação de email', () => {
    let email = ''

    test('an empty input should not be valid', () => {
        expect(validateEmail(email)).toEqual(false);
    });

    test('it should have an @ symbol', () => {
        email = "paulocgsantos99@gmail.com";
        expect(email.includes('@')).toEqual(true);
    });

    test('it should have an . symbol', () => {
        expect(email.includes('.')).toEqual(true);
    });

    test('a valid email should pass validation', () => {
        expect(validateEmail(email)).toEqual(true);
    });

});