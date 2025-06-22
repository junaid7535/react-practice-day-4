import React from 'react';

import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[userdata,setUserData] = useState([]);

   useEffect(() => {
    getUserData();
   },[]);

  const getUserData = async() => {
    const url = "https://dummyjson.com/users"; 

    let response = await fetch(url);
    response = await response.json();
    
    setUserData(response.users);
  }

  console.log(userdata);

  return (
    <div>
      Fetch data from api

      
       {
        userdata && userdata.map((user,index) => (
        <ul className='user-list'> 
          <li> {user.firstName} </li>
          <li> {user.lastName} </li>
          <li> {user.age} </li>
        </ul>
        ))
      }
    </div>
  )
}

export default App
