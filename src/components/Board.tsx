/* eslint-disable react/no-array-index-key */
import { SquarePotision } from '../types/SquarePosition';
import { SquareStatus } from '../types/SquareStatus';
import { Square } from './Square';

type Props = {
  statusesList: SquareStatus[][];
  onClick: (position: SquarePotision) => void;
};

export const Board = (props: Props) => {
  const { statusesList, onClick } = props;

  return (
    <div>
      {statusesList.map((statuses, y) => (
        <div key={y}>
          {statuses.map((status, x) => (
            <Square key={x} status={status} onClick={() => onClick({ y, x })} />
          ))}
        </div>
      ))}
    </div>
  );
};
