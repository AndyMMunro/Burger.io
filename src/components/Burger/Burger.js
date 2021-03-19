import React from 'react';
// this brings in history props directly to all wrapped compenents
import { withRouter } from 'react-router-dom';
import BurgerIngredients from './Ingredients/BurgerIngredients'
import classes from './Burger.module.css'

const burger = (props) => {
  console.log(props);

// here we are transforming the state object from burgerBuilder to an array of
// just the strings from the state not the assigned values 
// this is being done with Object.keys which is built into react 

  let transformedIngredients = Object.keys(props.ingredients)
      .map(ingKey => {
// here we are adding the values to the string ie the amounts of ingredients
        return [...Array(props.ingredients[ingKey])] //looks like this [ , ]

        // now we are taking the ingkey (the name of the ingredients) and paring them with 
        // there indexes to result in an ingredient with an amount attached 
        .map((_, index) => {
          return <BurgerIngredients key={ingKey + index} type = {ingKey} />
        });
      })
// reduce is a built into JS and flatens the array or combines it into one value
// this allows us to see its value as a whole
      .reduce((arr, el)=>{
        return arr.concat(el)
      }, []);

      if (transformedIngredients.length === 0){
        transformedIngredients = <p>Please Pick Some Ingredients</p>
      }

    // const transformedIngredients = props.ingredientOrder.map((ingKey, index) => {
    //   return <BurgerIngredients key={ingKey + i} type={ingKey}
    // )}

  // console.log(transformedIngredients);

  return(
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );

};

export default withRouter (burger);