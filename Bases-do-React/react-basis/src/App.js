import logo from './logo.svg';
import './App.css';
import NovoComponente from './novo-componente/novo-componente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <NovoComponente valor={"Texto em Novo Componente!"}/>
      </header>
    </div>
  );
}

export default App;
