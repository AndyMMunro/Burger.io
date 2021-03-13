import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/logo';
import Navitems from '../Navitems/Navitems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


const toolBar =(props) =>(

  <header className={classes.Toolbar} >
    <div className={classes.Logo} >
      <Logo />
    </div>
    <div>
      <DrawerToggle clicked={props.drawerToggleHandler} />
    </div>
    <nav className={classes.DesktopOnly} >
      <Navitems/>
    </nav>

  </header>

);

export default toolBar;