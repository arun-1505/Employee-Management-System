import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  

    const [email, setEmail]=useState('');
    const [password,SetPassword]=useState('');


    const submitHandler=(e)=>{
        e.preventDefault();
        handleLogin(email,password)
        setEmail('');
        SetPassword('');
    }


  return (

    <div className=' w-screen h-screen flex items-center justify-center' >
                <div className='border-2 rounded-xl p-11 border-emerald-600  ' >
               <form  onSubmit={(e)=>{
                submitHandler(e)
                }} className='flex flex-col items-center justify-center ' >



                 <input value={email} onChange={(e)=>{
                setEmail(e.target.value); }}
            
                   required   
                   className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email'/>



                 <input value={password} onChange={(e)=>{
                SetPassword(e.target.value) }}
            
                  required className='outline-none mt-7 bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter your password' />
        
        
                 <button  className='  outline-none mt-7 bg-emerald-600 border-2 border-white font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email'  >Login</button>
                 </form>
                 </div>
      
    </div>
  )
}

export default Login
