type Props = {
  status: Status;
  onClick: () => void;
};

type Status = 'WHITE' | 'BLACK' | 'NONE';

const Square = (props: Props) => {
  const { status, onClick } = props;

  let className: string;
  let statusText: string;
  if (status === 'WHITE') {
    className = 'white-square';
    statusText = '🤍';
  } else if (status === 'BLACK') {
    className = 'black-square';
    statusText = '🖤';
  } else {
    className = 'default-square';
    statusText = '💚';
  }

  return (
    <button className={className} onClick={onClick} type="button">
      {statusText}
    </button>
  );
};

export default Square;
