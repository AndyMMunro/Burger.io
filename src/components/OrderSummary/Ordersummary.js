import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Button from '../UI/Button/Button';

const orderSummary = (props) => {

  const ingredientSummary = Object.keys(props.ingredients)
        .map(ingKey => {
          // rapping in the span capitalizes the key name 
          return(
            <li key={ingKey}>
              <span style={{textTransform: 'capitalize' }}> {ingKey} </span> 
              {props.ingredients[ingKey]} 
            </li>
          ) 
        });

  return(
    <Aux>
      <h3>Your Order </h3>
      <p>Scrumptious Burger with:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to check out?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelHandler} >CANCEL ORDER</Button>
      <Button btnType="Success" clicked={props.purchaseSuccessHandler}  >CONTINUE TO CHECKOUT</Button>
    </Aux>

  )
};

export default orderSummary;