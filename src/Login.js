import React from 'react'
import {useState} from 'react'
import Store from './books.js'
import SignUp from './SignUp.js'
import UserStore from './books.js'

function Login()
{
  const [fname,setFname]= useState("firstName");
  const [password,setPassword]= useState("PassWord");
  const [sign,setSign]= useState(false);
    
    const handleChange=(event)=>{
      setFname(event.target.value)
    }

    const handleChange1=(event)=>{
    setPassword(event.target.value)
    }
    const handleClick=()=>{
        setSign(true)
    } 
    function getComponent(){
        if(sign)
        return  <SignUp />
        else 
        return null;
    }
    return(
        <div>
        <input type="text" placeholder="Enter the name" onChange={handleChange}></input>
        <br></br>
        <br></br>
        <input type="password" placeholder="Enter the Password" onChange={handleChange1}></input>
        <br></br>
        <br></br>
      
        <button  >Login</button>
       
        <button  onClick={handleClick} >Sign In</button>
        {getComponent()}
        
        </div>
    )
}
export default Login;