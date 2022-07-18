/* eslint-disable react/no-array-index-key */
import { SquareStatus } from '../types/SquareStatus';
import { Square } from './Square';

type Props = {
  statusesList: SquareStatus[][];
  onClick: (x: number, y: number) => void;
};

export const Board = (props: Props) => {
  const { statusesList, onClick } = props;

  return (
    <div>
      {statusesList.map((statuses, x) => (
        <div key={x}>
          {statuses.map((status, y) => (
            <Square key={y} status={status} onClick={() => onClick(x, y)} />
          ))}
        </div>
      ))}
    </div>
  );
};
