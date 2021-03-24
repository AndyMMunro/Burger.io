import React, { Component } from "react";
import classes from "./ContactData.module.css";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-order";
import Spinner from "../../../components/UI/Spinner/Spinner";
class ContactData extends Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            zip: "",
        },
        loading: false,
    };

    orderHandler = (event) => {
        event.preventDefault();
        // console.log(this.props.ingredients);
        //   //  alert('you have continued to checkout')
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: "andy M",
                address: {
                    street: "555 street",
                    country: "USA",
                    zip: "12345",
                },
                email: "12345@gmail.com",
            },
            deliveryMethod: "fastest",
        };
        // this is unique to firebase ---.json
        axios
            .post("/orders.json", order)
            .then((res) => {
                this.setState({ loading: false });
                this.props.history.push("/");
                // console.log(res)
            })
            .catch((error) => {
                this.setState({ loading: false });
            });
    };

    render() {
        let form = (
            <form className={classes.Input}>
                <input
                    className={classes.Input}
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                <input
                    className={classes.Input}
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                <input
                    className={classes.Input}
                    type="text"
                    name="street"
                    placeholder="Street"
                />
                <input
                    className={classes.Input}
                    type="text"
                    name="zip"
                    placeholder="Zip Code"
                />
                <Button btnType="Success" clicked={this.orderHandler}>
                    Complete Order
                </Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }

        return (
            <div className={classes.ContactData}>
                <h4>enter your contact info:</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
