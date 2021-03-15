import React, { Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

  //  here we are making the component up date only when the show option ie 
  // checkout button is clicked. 

  shouldComponentUpdate(nextProps, nextState){
    
    return nextProps.show !== this.props.show;
  }
  
  componentDidUpdate(){
    console.log('[Modal] modal up dated');
  }

  render(){
  

    return(
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.purchaseCancelHandler} />
          <div 
          // this causes the order summary to hide and show by moving to off screen to the left
            style={{transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)', 
                  opacity: this.props.show ? '1' : '0'
            }}
            className={classes.Modal} 
          >
            {this.props.children}
          </div>
    </Aux>
    )

  }
} 

export default Modal;