import { SquareStatus } from '../types/SquareStatus';

const DEFAULT_SIZE = 6;

const generateStatusesList = (n: number): SquareStatus[][] =>
  Array<SquareStatus[]>(n)
    .fill(Array<SquareStatus>(n).fill('NONE'))
    .fill(
      Array<SquareStatus>(n)
        .fill('NONE')
        .fill('WHITE', n / 2 - 1, n / 2)
        .fill('BLACK', n / 2, n / 2 + 1),
      n / 2 - 1,
      n / 2,
    )
    .fill(
      Array<SquareStatus>(n)
        .fill('NONE')
        .fill('BLACK', n / 2 - 1, n / 2)
        .fill('WHITE', n / 2, n / 2 + 1),
      n / 2,
      n / 2 + 1,
    );

export const generateInitialStatusesList = (n: number): SquareStatus[][] => {
  // nは4以上の偶数でなければならない
  if (n < 4 || n % 2 !== 0) {
    return generateStatusesList(DEFAULT_SIZE);
  }

  return generateStatusesList(n);
};
