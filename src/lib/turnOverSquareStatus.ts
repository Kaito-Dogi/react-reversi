import { SquarePotision } from '../types/SquarePosition';
import { SquareStatus } from '../types/SquareStatus';

export const turnOverSquareStatus = (
  position: SquarePotision,
  statusesList: SquareStatus[][],
): SquareStatus[][] => {
  const { y, x } = position;
  // FIXME: 二重配列の複製で as SquareStatus[][] を使用しないようにする
  const newStatusesList: SquareStatus[][] = JSON.parse(
    JSON.stringify(statusesList),
  ) as SquareStatus[][];

  console.log(newStatusesList);

  switch (statusesList[y][x]) {
    case 'WHITE':
      newStatusesList[y][x] = 'BLACK';
      break;
    case 'BLACK':
      newStatusesList[y][x] = 'WHITE';
      break;
    default:
  }

  return newStatusesList;
};
