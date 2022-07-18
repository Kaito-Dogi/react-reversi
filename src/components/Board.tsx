/* eslint-disable react/no-array-index-key */
import { Status } from '../types/Status';
import { Square } from './Square';

type Props = {
  statusesList: Status[][];
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
