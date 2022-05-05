import React from "react";
import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import {incNumber, decNumber} from './actions/index'

function App() {
  const mystate =useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch()
  return (
    <div className="container">
      <h1>Increment/Decrement Counter</h1>
      <h4>Using React and Redux'</h4>

      <div className="quantity">
        <button className="quantity_minus" title="Decrement" onClick={()=>dispatch(decNumber())}><span> - </span></button>
        <input name="quantity" type="text" className="Quantity_input" value={mystate}></input>
        <button className="quantity_plus" title="Increment" onClick={()=>dispatch(incNumber())}><span> + </span></button>
        {/* <a className="quantity_plus" title="Increment"><span>+</span></a> */}
      </div>
    </div>
  );
}

export default App;

