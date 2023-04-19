import React, {useContext, useState} from 'react'
import { Alert } from '@mui/material';
import { AppContext } from '../../util/UserContext'

const Login = () => {
  const[email,setEmail] = useState(" ");
  const[password,setPassword] = useState(" ");
  const[error,setError] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
    if(email == "kalmeghkirti@gmail.com"  && password == "12345"){
        setError("Login Successfull!")
    }
    else{
        setError("Email or password invalid")
    }
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <p>
            <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </p>
        <p>
            <input
                type='password'
                placeholder='Password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </p>
        <input type='submit'/>
        </form>
        <p>
        <Alert severity="error">{error}</Alert>
        </p>
    </div>
  )
}

export default Login