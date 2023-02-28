import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './ReduxToolKit/counterSlice';

function App() {
  const myState = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux Toolkit Example</h1>
      <input type="text"  value={myState} />
      <button onClick={()=> dispatch(increment())}>Plus</button>
      <button onClick={()=> dispatch(decrement())}>Minus</button>
      
    </div>
  );
}

export default App;
