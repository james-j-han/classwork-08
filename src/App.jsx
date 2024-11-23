import "./App.css";
import Counter from "./components/Counter";
import FilteredList from './components/FilteredList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <h1>Counter App</h1>
      <Counter />
      <FilteredList />
    </div>
  );
}

export default App;
