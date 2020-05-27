import React from 'react';
import logo from './logo.svg';

import './App.css';
import Login from './Login.js'
import {useSelector,useDispatch} from 'react-redux';
import SignUp from './SignUp';


function App() {
  const user=useSelector(state=>state.user);
  const count=useSelector(state=>state.count);

  return (
    <div className="App">
    <h1>Hello React and Redux</h1>
     <h1>Count of User:{count}</h1>
     <Login />
    <h2>User is: {user}</h2>
    </div>
  );
}

export default App;
