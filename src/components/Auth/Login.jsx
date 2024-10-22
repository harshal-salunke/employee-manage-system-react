import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const [ email, setEmail ] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email,password) // parent ke ander se handle login naam ka function pass kiya uske ander data pass kar diya email and password tab vo parent ke function means "handleLogin" ke condition check karega....
    setEmail("")
    setPassword("")
  }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form onSubmit={(e) => {
          submitHandler(e)
        }}
         className='flex flex-col items-center justify-center'>

          <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }} 
          required className='outline-none bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 border-2' type='email' placeholder='Enter your email' />

          <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }} 
          required className='outline-none bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 border-2 mt-3' type='password' placeholder='Enter your password' />

          <button className='text-white border-none outline-none border-emerald-600 text-lg py-2 px-8 rounded-full mt-7 bg-emerald-600 hover:bg-emerald-700 font-semibold w-full'>Login</button>

        </form>

      </div>
    </div>
  )
}

export default Login