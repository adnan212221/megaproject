import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'


const Protectedroute = (props) => {

    const {Component} = props;

 const navigate = useNavigate();
 const token = Cookies.get('jwt');
 console.log(token);

 useEffect(() => {
   if (token === undefined){
    navigate('/login')
   }

   
 })
 

  return (
     <Component />
  )
}

export default Protectedroute