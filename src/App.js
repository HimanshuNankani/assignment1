import './App.css';
import Expenses from './components/Expenses';

function App() {

  const expenses = [{
    id: 'e1',
    title: 'Item1',
    amount: 10.30,
    date: new Date(2022, 9, 18)
  },
  {
    id: 'e2',
    title: 'Item2',
    amount: 12.30,
    date: new Date(2022, 9, 18)
  },
  {
    id: 'e3',
    title: 'Item3',
    amount: 30.30,
    date: new Date(2022, 9, 18)
  },
  {
    id: 'e4',
    title: 'Item4',
    amount: 4.30,
    date: new Date(2022, 9, 18)
  }];

  return (
    <div className="App">
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
