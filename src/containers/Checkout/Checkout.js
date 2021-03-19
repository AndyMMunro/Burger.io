import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

  state = {
    ingredients: {
      lettuce: 1,
      cheese:  1,
      meat: 1,
      bacon: 1,
      onion:  1,
      tomato:  1
    }
  }
  componentDidMount(){
    console.log(this.props);
// this takes the the info in search and turns it into an object that can looped
    const query = new URLSearchParams(this.props.location.search)
    const ingredients = {};
    for (let param of query.entries()){
      //['lettuce', '1']
      ingredients[param[0]] = + param[1]
    }
    this.setState({ingredients: ingredients})
  }

  checkoutCanceledHandler= ()=> {
    this.props.history.goBack();
  }

  checkoutCompletedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render(){

    return(
      <div>
        <CheckoutSummary 
            ingredients={this.state.ingredients}
            checkoutCanceled={this.checkoutCanceledHandler}
            checkoutCompleted={this.checkoutCompletedHandler} />
      </div>
    )
  }
}

export default Checkout;