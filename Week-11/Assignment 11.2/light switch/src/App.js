
import './App.css';
import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {changeState} from './ligtState'

function App() {
  const isLightOn = useSelector((state)=>state.toggleLights.value)
  const lightedness = isLightOn ? "lit" : "dark";
  const dispatch = useDispatch()
  const switchLight = () =>{
    dispatch(changeState(!isLightOn))
  }


    return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={switchLight}>flip</button>
      </div>
    );
  }


export default App;
