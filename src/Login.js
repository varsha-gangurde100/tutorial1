import React from 'react'
import {useState} from 'react'
import Store from './books.js'
import SignUp from './SignUp.js'
import UserStore from './books.js'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

function Login()
{
  const [fname,setFname]= useState("firstName");
  const [password,setPassword]= useState("PassWord");
  const [issign,setSign]= useState(false);
  const [islogin,setlogin]= useState(false);
    
    const handleChange=(event)=>{
      setFname(event.target.value)
    }

    const handleChange1=(event)=>{
    setPassword(event.target.value)
    }
   
   
    return(
      <Router >
        <div>
        <input type="text" placeholder="Enter the name" onChange={handleChange}></input>
        <br></br>
        <br></br>
        <input type="password" placeholder="Enter the Password" onChange={handleChange1}></input>
        <br></br>
        <br></br>
      
        
        <ul>
        <li>
          <Link to="/UserStore">Login    </Link>
          <Link to="/SignUp">SignUp  </Link>
        </li>
       </ul>
         <Route path="/SignUp" component={SignUp} />
        <Route path="/UserStore" component={UserStore} />
        
        </div>
        </Router>
    )
}
export default Login;