import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Nav/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../Nav/SideDrawer/SideDrawer';


class Layout extends Component {

  state={
    showSideDrawer: false
  }

  sideDrawerClosedHandler =()=>{
    this.setState({showSideDrawer: false})
  }

  drawerToggleHandler = () => {
    this.setState((prevState)=> {
      return { showSideDrawer: !prevState.showSideDrawer }
    });
  }

  render () {
    return(
      <Aux>
        <Toolbar 
          drawerToggleHandler={this.drawerToggleHandler}
        />
        <SideDrawer 
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
          />
    
        <main className={classes.Content}>
          <h1>Welcome to Build Your Own Burger Station</h1>
    
          {this.props.children}
        </main>
      </Aux>
    )
  }
};

export default Layout;