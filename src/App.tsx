import { useState } from 'react';
import './App.css';
import { Board } from './components/Board';
import { generateInitialStatusesList } from './lib/generateInitialStatusesList';
import { isClickable } from './lib/isClickable';
import { SquareStatus } from './types/SquareStatus';

const App = () => {
  const [statusesList, _] = useState<SquareStatus[][]>(
    generateInitialStatusesList(6),
  );
  const [isYourTurn, setIsYoutTurn] = useState(true);

  const handleClick = (x: number, y: number) => {
    if (!isClickable(x, y, statusesList)) return;

    setIsYoutTurn((prev) => !prev);
    console.log(isYourTurn);
    console.log(x, y);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Board statusesList={statusesList} onClick={handleClick} />
      </header>
    </div>
  );
};

export default App;
