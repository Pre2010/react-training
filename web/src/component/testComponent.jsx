import React, { useEffect, useState, Fragment } from "react";
import axios from 'axios'

export function TestComponent() {
  const [clickCount, setClickCount] = useState(0)
  const [testNum, setTestNum] = useState('No server message')

//   can rerun on every render, unless the empty array is in there. 
  useEffect(() =>{  
    axios.get('/test').then((response)=>{
      setTestNum(response.data)
    })
  },[])

   function handleClick() {
        setClickCount(previousCount => previousCount + 1)
    }

  return (
    <Fragment>
      <h2>I'm a test component!</h2>
      <div>{`You have clicked ${clickCount} time(s)`}</div>
      <button onClick={handleClick}>Increment</button>
      <h2>{`Message from server: ${testNum}`}</h2>
    </Fragment>
  );
}
