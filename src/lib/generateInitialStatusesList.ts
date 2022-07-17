import { Status } from '../types/Status';

export const generateInitialStatusesList = (n: number): Status[][] =>
  Array<Status[]>(n).fill(Array<Status>(n).fill('NONE'));
