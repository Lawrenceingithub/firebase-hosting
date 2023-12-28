import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Auth} from './pages/auth/index';
import { ExpenseTracker } from './pages/expense-tracker';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />}/>
          <Route path="expense-tracker" exact element={<ExpenseTracker />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
