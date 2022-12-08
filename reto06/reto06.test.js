const createCube = require('./reto06');

describe('reto06', () => {
  test('createCube(1)', () => {
    expect(createCube(1)).toEqual('/\\_\\\n\\/_/');
  });

  test('createCube(2)', () => {
    expect(createCube(2)).toEqual(
      ' /\\_\\_\\\n/\\/\\_\\_\\\n\\/\\/_/_/\n \\/_/_/'
    );
  });

  test('createCube(3)', () => {
    expect(createCube(3)).toEqual(
      '  /\\_\\_\\_\\\n /\\/\\_\\_\\_\\\n/\\/\\/\\_\\_\\_\\\n\\/\\/\\/_/_/_/\n \\/\\/_/_/_/\n  \\/_/_/_/'
    );
  });
});
