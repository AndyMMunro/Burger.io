import React from "react";
import classes from "./Navitem.module.css";
import { NavLink } from "react-router-dom";

const navItem = (props) => (
    <li className={classes.Navitem}>
        {/* by adding exact here only the actual link will be active 
        with out exact all links are active */}
        <NavLink to={props.link} exact activeClassName={classes.active}>
            {props.children}
        </NavLink>
    </li>
);

export default navItem;
