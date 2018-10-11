'use strict';

const flatten = require('./index');

describe('special entry', () => {
  test('source is not an array', () => {
    expect(flatten()).toEqual([]);
    expect(flatten(1)).toEqual([]);
    expect(flatten('')).toEqual([]);
    expect(flatten({})).toEqual([]);
  });

  test('array is empty', () => {
    expect(flatten([])).toEqual([]);
  });

  test('option is werid', () => {
    expect(flatten([[ 1, 2, [ 3 ]], 4 ], null)).toEqual([ 1, 2, 3, 4 ]);
    expect(flatten([[ 1, 2, [ 3 ]], 4 ], 1)).toEqual([ 1, 2, 3, 4 ]);
  });
});

describe('flatten deep', () => {
  test(' [[1,2,[3]],4] -> [1,2,3,4]', () => {
    expect(flatten([[ 1, 2, [ 3 ]], 4 ])).toEqual([ 1, 2, 3, 4 ]);
  });
});

describe('flatten with certain depth', () => {
  test(' [[1,2,[3]],4] -> [1,2,[ 3 ],4]', () => {
    expect(flatten([[ 1, 2, [ 3 ]], 4 ], { depth: 1 })).toEqual([ 1, 2, [ 3 ], 4 ]);
  });
});
