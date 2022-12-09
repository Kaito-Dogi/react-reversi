import { SquareStatus } from '../types/SquareStatus';

type Props = {
  status: SquareStatus;
  onClick: () => void;
};

const SQUARE_STATUS = {
  WHITE: {
    className: 'white-square',
    text: '🤍',
  },
  BLACK: {
    className: 'black-square',
    text: '🖤',
  },
  NONE: {
    className: 'default-square',
    text: '💚',
  },
} as const;

export const Square = (props: Props) => {
  const { status, onClick } = props;
  const { className, text } = SQUARE_STATUS[status];

  return (
    <button className={className} onClick={onClick} type="button">
      {text}
    </button>
  );
};
