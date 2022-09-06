import logo from './logo.svg';
import './App.css';
import {counterActions} from './counterstore'
import {useSelector, useDispatch} from 'react-redux'

function App() {
  const dispatch = useDispatch();
  const counter =  useSelector((state)=>state.counter)

  const incrementHandler =()=>{
    dispatch(counterActions.increment());
  }

  const decrementhandler = () =>{
    dispatch(counterActions.decrement())
  }

  return (
    <div className="App">
      <>{counter}</>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementhandler}>Decrement</button>
    </div>
  );
}

export default App;
