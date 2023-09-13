import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const {Component} =props;
    const navigate = useNavigate()
    useEffect(()=>{
       const login = localStorage.getItem("Token")
       if(!login){
        navigate("/signup")
       }
    })

  return (
    <div>
      {/* <h1>Protected js</h1> */}
      <Component/>
    </div>
  )
}

export default Protected
