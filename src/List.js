
import { click } from '@testing-library/user-event/dist/click';
import React from 'react'
import { useState} from 'react';

const Content = () => {
    const [name, setName] = useState('Dave');
    const [count, setCount] = useState(0);


    const handleNameChange =() =>{
     const names = ['anisam' , 'jamal' ,'ajoke'];
     const int = Math.floor(Math.random() * 3);
     setName(names[int]);
  } 
  
  const handleClick = () => {
    setCount(count +1)
    console.log(count)
  }
    const handleClick2= (name) => {
     console.log(count)
  }
    
  return (
    <main>
        <p onDoubleClick={handleClick}>
            hello {name}!
        </p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={handleClick}>Click it</button>
        <button onClick={(e) => handleClick2(e)}>Click it</button>
    </main> 
  )
}

export default Content