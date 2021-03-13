import React from 'react';
import Navitem from './Navitem/Navitem';
import classes from './Navitems.module.css';

const navItems = (props) => (

  <ul className={classes.NavItems} >
    <Navitem link="/" active={true} >Burger Builder</Navitem>
    <Navitem link="/" active >Checkout</Navitem>
  </ul>

);

export default navItems;