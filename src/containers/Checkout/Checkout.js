import React, { Component } from "react";
import { Route } from "react-router";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "../Checkout/ContactData/ContactData";
class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0,
    };

    componentWillMount() {
        console.log(this.props);
        // this takes the the info in search and turns it into an object that can looped
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            //sets things to look like this key value pair['lettuce','1']
            if (param[0] === "price") {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ ingredients: ingredients, totalPrice: price });
    }

    checkoutCanceledHandler = () => {
        this.props.history.goBack();
    };

    checkoutCompletedHandler = () => {
        this.props.history.replace("/checkout/contact-data");
    };

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCanceled={this.checkoutCanceledHandler}
                    checkoutCompleted={this.checkoutCompletedHandler}
                />
                <Route
                    path={this.props.match.path + "/contact-data"}
                    render={(props) => (
                        <ContactData
                            ingredients={this.state.ingredients}
                            price={this.state.totalPrice}
                            {...props}
                        />
                    )}
                />
            </div>
        );
    }
}

export default Checkout;
