type Props = {
  status: number;
};

const Square = (props: Props) => {
  const { status } = props;

  let className: string;
  if (status === 2) {
    className = 'white-square';
  } else if (status === 1) {
    className = 'black-square';
  } else {
    className = 'default-square';
  }

  return <div className={className}>あああ</div>;
};

export default Square;
