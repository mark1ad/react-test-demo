import { DivBy } from './stuff';

describe ('stuff tests', () => {
  test('DivBy success', () => {
    let result = DivBy(4,2);
    expect(result).toBe(2);
  });

  test('DivBy divide by zero', () => {
    expect(DivBy(4,0)).toBe(NaN)
  })
})

describe('test 2', () => {
  test("this is anouther test", () => {

  })
})
