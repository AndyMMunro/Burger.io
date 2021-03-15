import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Button from '../UI/Button/Button';

class OrderSummary extends Component {

  // componentDidUpdate(){
  //   console.log('[OrderSummary] Did up date');
  // }

  render () {

    const ingredientSummary = Object.keys(this.props.ingredients)
        .map(ingKey => {
          // rapping in the span capitalizes the key name 
          return(
            <li key={ingKey}>
              <span style={{textTransform: 'capitalize' }}> {ingKey} </span> 
              {this.props.ingredients[ingKey]} 
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
      <p><strong>TOTAL PRICE: ${this.props.totalPrice.toFixed(2)} </strong></p>
      <p>Continue to check out?</p>
      <Button btnType="Danger" clicked={this.props.purchaseCancelHandler} >CANCEL ORDER</Button>
      <Button btnType="Success" clicked={this.props.purchaseSuccessHandler}  >CONTINUE TO CHECKOUT</Button>
    </Aux>
    );
  }
} 

export default OrderSummary;