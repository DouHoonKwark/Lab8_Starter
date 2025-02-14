// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('matches valid phone numbers', () => {
    expect(functions.isPhoneNumber('266-9341')).toBe(true);
});

test('matches valid phone numbers', () => {
    expect(functions.isPhoneNumber('(917)102-9125')).toBe(true);
});

test('matches valid phone numbers', () => {
    expect(functions.isPhoneNumber('1107087222')).toBe(false);
});

test('matches valid phone numbers', () => {
    expect(functions.isPhoneNumber('8331236242')).toBe(false);
});

/////////////////////////////////////////////
test('matches valid emails', () => {
    expect(functions.isEmail('ewrmeKO1EvuH5QFKFl82uKuau6PdcM7WskpZFXb@ddww.Wf')).toBe(true);
});

test('matches valid emails', () => {
    expect(functions.isEmail('nnKLthLWiZ04c@asdfd.Rp')).toBe(true);
});

test('matches valid emails', () => {
    expect(functions.isEmail('UizJFKr_UvN8ppTw5qWELXuBE@wqwe22mUy')).toBe(false);
});

test('matches valid emails', () => {
    expect(functions.isEmail('uIe@AshbSYibqeCCADHKYKqzTQyyDvFRUXSeevXNPbEQInTWRdMsqqqqOPb')).toBe(false);
});

//////////////////////////////////////////////

test('matches valid strong password', () => {
    expect(functions.isStrongPassword('shkySRA3P')).toBe(true);
});

test('matches valid strong password', () => {
    expect(functions.isStrongPassword('NwRutsC6rlpg')).toBe(true);
});

test('matches valid strong password', () => {
    expect(functions.isStrongPassword('CMcouqwerqwrqwrqwerqwr232423kyw')).toBe(false);
});

test('matches valid strong password', () => {
    expect(functions.isStrongPassword('Vw')).toBe(false);
});

//////////////////////////////////////////////

test('matches valid date', () => {
    expect(functions.isDate('6/31/3656')).toBe(true);
});

test('matches valid date', () => {
    expect(functions.isDate('2/35/7666')).toBe(true);
});

test('matches valid date', () => {
    expect(functions.isDate('1/1/11222211')).toBe(false);
});

test('matches valid date', () => {
    expect(functions.isDate('1/612342134/2353')).toBe(false);
});

//////////////////////////////////////////////

test('matches valid hex codes used for HTML or CSS', () => {
    expect(functions.isHexColor('9F9')).toBe(true);
});

test('matches valid hex codes used for HTML or CSS', () => {
    expect(functions.isHexColor('282Fcc')).toBe(true);
});

test('matches valid hex codes used for HTML or CSS', () => {
    expect(functions.isHexColor('#7FC311112a')).toBe(false);
});

test('matches valid hex codes used for HTML or CSS', () => {
    expect(functions.isHexColor('d2e411233A')).toBe(false);
});