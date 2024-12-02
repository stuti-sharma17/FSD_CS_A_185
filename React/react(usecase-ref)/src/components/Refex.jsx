import {useState,useRef} from 'react'
// import React from 'react';
const Refex = () => {
    const[ inputvalue,setinputvalue]=useState("");
    const count = useRef(0);
  return (
    <div>
      <input type="text" value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)} />
      <br/>
      Render Count:{count.current = count.current+1}

    </div>
  )
}

export default Refex
