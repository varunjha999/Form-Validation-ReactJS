import React,{useState} from 'react';
import './App.css';
function Login()
{
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(false);
    const [passErr,setpassErr] = useState(false);

  function  loginHandle (event){
    if(name.length < 5 || password.length < 5){
         alert("Please enter valid data");
    }
    else{
        alert("Login Successfull");
    }


        event.preventDefault();
        console.log("Login");
    }
    function userHandler(event){
        let item = event.target.value;
         if (item.length < 5) {
            setError(true);
        }
        else{
            setError(false);
        }
         setName(item)
        // setName(event.target.value);
    }

    function passwordHandler(event){
        let item = event.target.value;
         if (item.length < 5) {
            setpassErr(true);
        }
        else{
            setpassErr(false);
        }
            setPassword(item) 
        // setPassword(event.target.value);
    }


    return(
    <div>
        <h1>Login</h1>
        <form onSubmit={loginHandle}>  
        <input type="text" placeholder="Enter your name" onChange={userHandler} />  {error ? <span> Name is not valid </span> : ""} 
        <br />  <br />
        <input type="password" placeholder="Enter your password" onChange={passwordHandler} />  {passErr ? <span> Password is not valid </span> : ""}
        <br /> <br />
        <button type="submit">Login</button>
        </form>
    </div>
    );
}

export default Login;
