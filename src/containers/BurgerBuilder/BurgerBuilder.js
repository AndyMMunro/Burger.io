import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/Ordersummary';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';


const INGREDIENT_PRICES = {
  lettuce: .5,
  cheese: .75,
  meat: 1.50,
  bacon: 1,
  onion: .25,
  tomato: .75
}

class BurgerBuilder extends Component {

  // this is the amount of ingredients that are allowed. 
  // these keys have to === the ones in BurgerIngredients or  
  // the burger mapping will not work 
  state= {
    ingredients: null,
    totalPrice: 5,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false

  }

  componentDidMount() {
    // console.log(this.props);
    axios.get('https://burger-5f281-default-rtdb.firebaseio.com/ingredients.json')
    .then(res => {
      this.setState({         
        ingredients: {
            lettuce: res.data.lettuce,
            bacon: res.data.bacon,
            cheese: res.data.cheese,
            onion: res.data.onion,
            tomato: res.data.tomato,
            meat: res.data.meat,
    },
  })
    })
    .catch(error => {
      this.setState({error: true})
    })
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
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients})
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

  purchaseCancelHandler = () =>{
    this.setState({purchasing: false})
  }

  purchaseSuccessHandler = () => {
  //   //  alert('you have continued to checkout')
  //   this.setState({loading: true})
  //   const order = {
  //     ingredients: this.state.ingredients,
  //     price: this.state.totalPrice,
  //     customer:{
  //       name: 'andy M',
  //       address: {
  //         street: '555 street',
  //         country: 'USA',
  //         zip:'12345'
  //       },
  //       email: '12345@gmail.com'
        
  //     },
  //     deliveryMethod: 'fastest'
  //   }
  //   // this is unique to firebase ---.json
  //   axios.post('/orders.json', order)
  //   .then(res => {
  //     this.setState({loading: false, purchasing: false})
  //     // console.log(res)
  //     })
  //     .catch(error =>{
  //       this.setState({loading: false, purchasing: false});
  //     })
  const queryParams = [];
  for(let i in this.state.ingredients){
    queryParams.push(encodeURIComponent(i)+ '=' + encodeURIComponent(this.state.ingredients[i]))
  }
  const queryString = queryParams.join('&');
  this.props.history.push({
      pathname:'/checkout',
      search:'?' + queryString
    });
  
  }

  render(){
    const disabledInfo = {
      ...this.state.ingredients
    };
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    
    let orderSummary = null;

    let burger = this.state.error ? <p>ingredients cannot be loaded</p> : <Spinner/>

      if ( this.state.ingredients){
        burger = (
         <Aux>
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
       orderSummary = <OrderSummary 
        ingredients={this.state.ingredients} 
        purchaseCancelHandler={this.purchaseCancelHandler}
        purchaseSuccessHandler={this.purchaseSuccessHandler}
        totalPrice={this.state.totalPrice}
        />
      }
      if(this.state.loading){
        orderSummary = <Spinner/>;
      }
    

    return(
      <Aux>
        <h1>Welcome to Build Your Own Burger Station</h1>

        <Modal show={this.state.purchasing} purchaseCancelHandler={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
          {burger}
      </Aux>
    );
  }
};

export default withErrorHandler(BurgerBuilder, axios);