import { useState } from 'react';
import './App.css';
import { Board } from './components/Board';
import { generateInitialStatusesList } from './lib/generateInitialStatusesList';
import { isClickable } from './lib/isClickable';
import { SquarePotision } from './types/SquarePosition';
import { SquareStatus } from './types/SquareStatus';

const App = () => {
  const [statusesList, _] = useState<SquareStatus[][]>(
    generateInitialStatusesList(6),
  );
  const [isYourTurn, setIsYoutTurn] = useState(true);

  const handleClick = (position: SquarePotision) => {
    console.log(position);
    if (!isClickable(position, statusesList)) return;

    setIsYoutTurn((prev) => !prev);
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
