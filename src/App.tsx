import { useState } from 'react';
import './App.css';
import { Board } from './components/Board';
import { generateInitialStatusesList } from './lib/generateInitialStatusesList';
import { Status } from './types/Status';

const handleClick = (x: number, y: number) => {
  console.log(x, y);
};

const App = () => {
  const [statusesList, _] = useState<Status[][]>(
    generateInitialStatusesList(6),
  );

  return (
    <div className="App">
      <header className="App-header">
        <Board statusesList={statusesList} onClick={handleClick} />
      </header>
    </div>
  );
};

export default App;
