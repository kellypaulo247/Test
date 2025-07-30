import { twoSum } from '../calculate2SumSortedArray';


describe('twoSum', () => {
    it('returns the indices of the two numbers that add up to the target', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
    });

  it('returns indices even if no valid pair exists (edge case)', () => {
    expect(twoSum([1, 2, 3], 100)).toEqual([3, 3]);
  });

  it('finds [1,3] for input [2,3,4], target 6', () => {
    const input = [2, 3, 4];
    const target = 6;
    expect(twoSum(input, target)).toEqual([1, 3]);
  });

    it('works with negative numbers', () => {
    expect(twoSum([-3, 0, 3, 4], 0)).toEqual([1, 3]);
  });
});