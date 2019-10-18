import React from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "../Button";
import SavedItemCounter from "./SavedItemsCounter";
import SaveButton from "../SaveButton";

/**
 * Not really a bread crumb menu. 
 * @param {Object} props 
 */
export default function BreadCrumb(props) {

    const HomeButton = withRouter(props => {

        return props.location.pathname === "/" ? (null) :
            <Link className="HomeButton" to="/">
                <Button text="home"></Button>
            </Link>
    });

    const id = props.id;
    const saveType = props.saveType || "invalid";

    return (
        <nav className="BreadCrumb">
            <div className="breadcrumb-left">
                <HomeButton />
                <SavedItemCounter />
            </div>
            <SaveButton id={id} type={saveType}></SaveButton>
        </nav>
    )
}