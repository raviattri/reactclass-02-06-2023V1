import React, { useState } from 'react'

export default function FomData() {
    const [data, setData] = useState({});
  

    function  handchange(e){
        
        setData({...data, [e.target.name] : e.target.value})
        console.log({...data, [e.target.name] : e.target.value})
    }

    
  return (
    <div>        
    <input  name="user" onChange={handchange}/>
    <input  name="roll" onChange={handchange}/>
    <p>{data.user}</p>
    <p>{data.roll}</p>
    </div>
  ) 
}
