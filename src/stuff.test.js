import { DivBy } from './stuff';

describe ('stuff tests', () => {
  it('DivBy success', () => {
    let result = DivBy(4,2);
    expect(result).toBe(2);
  });

  it('DivBy divide by zero', () => {
    expect(DivBy(4,0)).toBe(NaN)
  })
})
