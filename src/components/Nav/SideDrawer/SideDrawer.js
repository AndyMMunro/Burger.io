import React from "react";
import Logo from '../../Logo/logo';
import Navitems from '../Navitems/Navitems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
      attachedClasses = [classes.SideDrawer, classes.Open];
    }
  // adding animation here thats why its has is normal function that uses curly braces. 

  return(
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
        <div className={attachedClasses.join(' ')} >
          <div className={classes.Logo} >
            <Logo />
          </div>
          <nav  >
            <Navitems/>
          </nav>
        </div>

    </Aux>
  )
};

export default sideDrawer;