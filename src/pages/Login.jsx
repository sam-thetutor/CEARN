import { NFIDLogin } from 'ic-auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    const handleLogin = async()=>{

        const res = await NFIDLogin()
        console.log("dddd :",res);
        navigate("dashboard")

        

    }
// asxbai

  return (
    <div className='flex gap-4 flex-col w-full h-full justify-center items-center'>
        
      <h1>Cearn Finance</h1>

      <button onClick={async () => await handleLogin()}>Login</button>
    </div>
  )
}

export default Login
