import React, { Component } from 'react';
import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';


class ContactData extends Component{

  state= {
    name: '',
    email: '',
    address:{
      street: '',
      zip:''
    }
  }

  render(){

    return(
      <div className={classes.ContactData} >
        <h4>enter your contact info:</h4>
        <form className={classes.Input}>
          <input className={classes.Input} type="text" name="name" placeholder="Name"/>
          <input className={classes.Input} type="email" name="email" placeholder="Email"/>
          <input className={classes.Input} type="text" name="street" placeholder="Street"/>
          <input className={classes.Input} type="text" name="zip" placeholder="Zip Code"/>
          <Button btnType='Success' >Complete Order</Button>
        </form>
      </div>
    )
  }
}

export default ContactData;