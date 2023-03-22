import './App.css';
import TransactionList from './components/TransactionList';
import RewardsByMonth from './components/RewardsByMonth';

function App() {
  return (
    <div className="App">
      <h1>Rewarding System</h1>
      <TransactionList />
      <RewardsByMonth />
    </div>
  );
}

export default App;
