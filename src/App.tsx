import './App.css';
import Square from './components/Square';

const App = () => {
  const onClick = () => {
    console.log('あああ');
  };

  return (
    <div className="App">
      <header className="App-header">
        <Square status="WHITE" onClick={onClick} />
        <Square status="BLACK" onClick={onClick} />
        <Square status="NONE" onClick={onClick} />
      </header>
    </div>
  );
};

export default App;
