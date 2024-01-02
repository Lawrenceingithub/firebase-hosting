import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import { Auth } from './pages/auth/index';
import { ExpenseTracker } from './pages/expense-tracker';
import { Home } from './pages/home';
import { Ingredient } from './pages/ingredient';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" exact element={<Home />}/>
          <Route path="/" exact element={<Auth />}/>
          <Route path="/expense-tracker" exact element={<ExpenseTracker />}/>
          <Route path="/ingredientpage" exact element= {<Ingredient />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
