import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
    totalPrice: 5
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

  }

  render(){
    const disableInfo = {
      ...this.state.ingredients
    };
    for(let key in disableInfo){
      disableInfo[key] = disableInfo[key] <= 0
    }
    return(
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
        addIngredientHandler={this.addIngredientHandler}
        removeIngredientHandler={this.removeIngredientHandler}
        disableInfo={disableInfo}
        />
      </Aux>
    );
  }
};

export default BurgerBuilder;