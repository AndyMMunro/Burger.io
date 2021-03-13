import React from 'react';
import classes from './Navitem.module.css';

const navItem = (props) =>(

  <li className={classes.Navitem} > 
    <a  
      href={props.link} 
      className={props.active ? classes.a : null} 
    >
      {props.children}
    </a> 
   </li>

);

export default navItem;