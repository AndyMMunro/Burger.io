import React from 'react';
import Logo from '../../Assests/Images/burger-logo.png';
import classes from './Logo.module.css';


const logo = (props) => (
  <div className={classes.Logo} >
    <a href="/" >
    <img src={Logo} alt="Andys Burgers" />
    </a>
  </div>
);

export default logo;