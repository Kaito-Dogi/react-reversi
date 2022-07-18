import { SquarePotision } from '../types/SquarePosition';
import { SquareStatus } from '../types/SquareStatus';

export const isClickable = (
  position: SquarePotision,
  statusesList: SquareStatus[][],
): boolean => {
  const { y, x } = position;
  if (statusesList[y][x] !== 'NONE') {
    console.log(`{y: ${y}, x: ${x}} is 'BLACK' or 'WHITE'`);

    return false;
  }

  console.log(`{y: ${y}, x: ${x}} is 'NONE'`);

  return true;
};
