import { Status } from '../types/Status';
import Square from './Square';

type Props = {
  statusesList: Status[][];
  onClick: (x: number, y: number) => void;
};

const Board = (props: Props) => {
  const { statusesList, onClick } = props;

  return (
    <div>
      {statusesList.map((statuses, x) => (
        <div>
          {statuses.map((status, y) => (
            <Square status={status} onClick={() => onClick(x, y)} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
