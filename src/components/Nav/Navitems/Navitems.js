import React from "react";
import Navitem from "./Navitem/Navitem";
import classes from "./Navitems.module.css";

const navItems = (props) => (
    <ul className={classes.NavItems}>
        <Navitem link="/">Burger Builder</Navitem>
        <Navitem link="/orders">Orders</Navitem>
    </ul>
);

export default navItems;
