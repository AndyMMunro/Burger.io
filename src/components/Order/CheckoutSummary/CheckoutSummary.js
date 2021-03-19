import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSum.module.css'

const checkoutSummary =(props)=>{
  
  return(
    <div className={classes.CheckoutSummary}>
      <h1>Hope you Enjoy</h1>
      <div style= {{width: '300px', height:'300px', margin: 'auto'}} >
        <Burger ingredients= {props.ingredients} />
      </div>
      <Button btnType="Success" clicked>Finish Checkout</Button>
      <Button btnType="Danger" clicked>Cancel Checkout</Button>
    </div>
  )

}

export default checkoutSummary;