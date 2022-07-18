import { Status } from '../types/Status';

const DEFAULT_SIZE = 6;

const generateStatusesList = (n: number): Status[][] =>
  Array<Status[]>(n)
    .fill(Array<Status>(n).fill('NONE'))
    .fill(
      Array<Status>(n)
        .fill('NONE')
        .fill('WHITE', n / 2 - 1, n / 2)
        .fill('BLACK', n / 2, n / 2 + 1),
      n / 2 - 1,
      n / 2,
    )
    .fill(
      Array<Status>(n)
        .fill('NONE')
        .fill('BLACK', n / 2 - 1, n / 2)
        .fill('WHITE', n / 2, n / 2 + 1),
      n / 2,
      n / 2 + 1,
    );

export const generateInitialStatusesList = (n: number): Status[][] => {
  // nは4以上の偶数でなければならない
  if (n < 4 || n % 2 !== 0) {
    return generateStatusesList(DEFAULT_SIZE);
  }

  return generateStatusesList(n);
};
