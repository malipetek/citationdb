import React, {useState} from "react";
import Button from "../Button";

import { getSavedAuthors, getSavedPublications, getSavedResources, subscribe } from "../SavedItemStorage";
import { Link } from "react-router-dom";
import pluralize from "pluralize";


export default function () {

    const getCurrentCount = () => {
        return getSavedAuthors().length + getSavedPublications().length + getSavedResources().length;
    }
    const [count, setCount] = useState(getCurrentCount());
    
    const updateCount = () => {
        setCount(getCurrentCount());
    }
    subscribe("counter",updateCount)

    return (<React.Fragment>
        {count > 0 ? (<Link className="PinsButton" to="/pins"><Button text={pluralize("pin", count, true)}></Button></Link>) : (null)}

    </React.Fragment>)
}