const checkPart = require('./reto08');

describe('reto08', () => {
  test('createCube(1)', () => {
    expect(checkPart('uwu')).toBeTruthy();
  });

  test('checkPart("midu")', () => {
    expect(checkPart('midu')).toBeFalsy();
  });

  test('checkPart("lolol")', () => {
    expect(checkPart('lolol')).toBeTruthy();
  });
});
