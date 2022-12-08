import { useState } from 'react';
import './App.css';
import { Board } from './components/Board';
import { createInitialStatusesList } from './lib/generateInitialStatusesList';
import { isClickable } from './lib/isClickable';
import { turnOverSquare } from './lib/turnOverSquareStatus';
import { SquarePotision } from './types/SquarePosition';
import { SquareStatus } from './types/SquareStatus';

const initialStatusesList: SquareStatus[][] = createInitialStatusesList(8);

const App = () => {
  const [statusesList, setStatusesList] =
    useState<SquareStatus[][]>(initialStatusesList);
  const [isYourTurn, setIsYoutTurn] = useState(true);

  const handleClick = (position: SquarePotision) => {
    console.log(position);
    if (!isClickable(position, statusesList)) return;

    setIsYoutTurn((prev) => !prev);
    setStatusesList((prev) => turnOverSquare(position, prev));
    console.log(`Is next your turn ? ${isYourTurn.toString()}`);
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
