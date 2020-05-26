import React from 'react'
import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { decrement } from './actions/decrement';
import SignUp from './SignUp';

function UserStore(props){
   const [isBuy,setBuy]=useState(false); 
   const n_books=useSelector(state=>state.n_books);
   const dispatch=useDispatch();

  const handleClick=()=>{
      dispatch(decrement());
  }
  const handleClick1=()=>{
    setBuy(true);
   }
  function  mainComponent(){
     if(isBuy)
      window.location.reload(false);
   }
    return(
      <div>
        <h1>Number of Books are:{n_books}</h1>
        <button onClick={handleClick}>Buy</button>
        <button onClick={handleClick1}>Cancel</button>
        {mainComponent()}
           <br></br>
        </div>
    )
}
export default UserStore;
