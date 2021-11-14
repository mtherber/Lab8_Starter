// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('checks if admin@gmail.com is an email', () => {
    expect(functions.isEmail('admin@gmail.com')).toBe(true);
});

test('checks if \'test\' is an email', () => {
    expect(functions.isEmail('test')).toBe(false);
});

test('cheks if 9167599583 is a valid phone number', () => {
    expect(functions.isPhoneNumber('759-5483')).toBe(true);
});

test('cheks if 9 is a valid phone number', () => {
    expect(functions.isPhoneNumber('9')).toBe(false);
});
