import React, { useState } from 'react'

const Header = (props) => {
  // const [username,setUsername]=useState('')
  // if(!data){
  //   setUsername('Admin')
  // }
  // else{
  //   setUsername(data.firstName)
  // }
   

  const logoutuser=()=>{

    localStorage.setItem('loggedInUser','')
    props.changeUser('')

    // window.location.reload()
  }
  
  
  return (
    <div className='flex items-end justify-between '>
        <h1 className='text-2xl' >Hello <br/> <span className='text-3xl font-semibold' >username 👋</span> </h1>
        <button onClick={logoutuser} className='bg-red-500 px-5 py-2 text-white rounded-xl' >Logout</button>
      
    </div>
  )
}

export default Header
