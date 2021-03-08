import React from 'react';
import BurgerIngredients from './Ingredients/BurgerIngredients'
import classes from './Burger.module.css'

const burger = (props) => {

  return(
    <div classes={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      <BurgerIngredients type="lettuce" />
      <BurgerIngredients type="cheese" />
      <BurgerIngredients type="bacon" />   
      <BurgerIngredients type="meat" />   
      <BurgerIngredients type="bread-bottom" />
    </div>
  );

};

export default burger;