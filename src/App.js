import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store';




function App() {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  


  const increment = () => {
    dispatch(actions.increment())
  }

  const decrement = () => {
    dispatch(actions.decrement());
  }

  const addBy = () => {
    dispatch(actions.addBy(10));
  }

  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBy}>Add by 10</button>
    </div>
  );
}

export default App;
