import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/Ordersummary';

const INGREDIENT_PRICES = {
  lettuce: .5,
  cheese: .75,
  meat: 1.50,
  bacon: 1
}

class BurgerBuilder extends Component {

  // this is the amount of ingredients that are allowed. 
  // these keys have to === the ones in BurgerIngredients or  
  // the burger mapping will not work 
  state= {
    ingredients: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 5,
    purchasable: false,
    purchasing: false

  }

  updatePurchaseState(ingredients){
    // copying the ingredients object then transmuting it into an Array 
    // with the object function then mapping through it to get the values
    const sum = Object.keys(ingredients)
      .map(ingKey => {
        return ingredients[ingKey]
      })
      .reduce((sum, el) => {
        return sum + el;
      } ,0)
      this.setState({purchasable: sum > 0})
  }

  addIngredientHandler =(type) => {
    const oldIngCount = this.state.ingredients[type];
    const upDatedIngCount = oldIngCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = upDatedIngCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) =>{
    const oldIngCount = this.state.ingredients[type];
    if (oldIngCount <= 0){
      return;
    }
    const upDatedIngCount = oldIngCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = upDatedIngCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({purchasing: true})
  };

  purchaseClosedHandler = () =>{
    this.setState({purchasing: false})
  }

  render(){
    const disabledInfo = {
      ...this.state.ingredients
    };
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return(
      <Aux>
        <Modal show={this.state.purchasing} purchaseClosedHandler={this.purchaseClosedHandler}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
            addIngredientHandler={this.addIngredientHandler}
            removeIngredientHandler={this.removeIngredientHandler}
            disabledInfo={disabledInfo}
            totalPrice={this.state.totalPrice}
            purchasable={this.state.purchasable}
            purchaseHandler={this.purchaseHandler}
        />
      </Aux>
    );
  }
};

export default BurgerBuilder;