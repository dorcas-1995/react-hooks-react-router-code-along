import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyles={
    display:'inline-block',
    width:'50px',
    padding:'12px',
    margin:'0 6px 6px',
    background:'blue',
    textDecoration:'none',
    color:'white',
  }
  
  export default function NavBar(){
    return(
      <div>
        <NavLink 
        style= {linkStyles} 
        activestyle={{background: "darkblue",}} 
        to='/'>
          Home
        </NavLink>
  
        <NavLink 
        style= {linkStyles} 
        to='/About'>
          About
        </NavLink>
  
        <NavLink 
        style= {linkStyles} 
        to='/Login'>
          Login
        </NavLink>
      </div>
    )
  }



