type Props = {
  status: number;
  onClick: () => void;
};

const Square = (props: Props) => {
  const { status, onClick } = props;

  let className: string;
  let statusText: string;
  if (status === 2) {
    className = 'white-square';
    statusText = '🤍';
  } else if (status === 1) {
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
