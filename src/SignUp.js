import React from 'react'
import {useState} from 'react'
import Login from './Login.js'
import {useDispatch} from 'react-redux';
import {setUser} from './actions/addName'
import UserStore from './books.js'


function SignUp()
{
 
  const dispatch=useDispatch();
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
        setSign(true);
        dispatch(setUser(fname));
    }
    const handleClick1=()=>{
      alert("you cancel sign in");
  } 
    function sendComponent(){
        if(sign)
        return  <UserStore />;
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
        <button  onClick={handleClick} >Sign In</button>
        <button  onClick={handleClick1}>Cancel</button>
        {sendComponent()}
        </div>

    )
}
export default SignUp;