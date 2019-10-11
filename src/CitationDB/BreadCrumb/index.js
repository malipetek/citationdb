import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import SavedItemCounter from "./SavedItemsCounter";

export default function BreadCrumb(props) {

    return (
        <nav className="BreadCrumb">
            <Link to="/"><span className="nav-item">
                home
            </span>
            </Link>
            <span className="nav-item">
                <SavedItemCounter />
            </span>
        </nav>
    )
}