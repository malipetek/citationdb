import React, {useState} from "react";

import { getSavedAuthors, getSavedPublications, getSavedResources, subscribe } from "../SavedItemStorage";
import { HashRouter as Router, Route, Link } from "react-router-dom";


export default function () {

    const getCurrentCount = () => {
        return getSavedAuthors().length + getSavedPublications().length + getSavedResources().length;
    }
    const [count, setCount] = useState(getCurrentCount());
    
    const updateCount = () => {
        setCount(getCurrentCount());
    }
    subscribe(updateCount)

    return (<React.Fragment>
        {count > 0 ? <Link to="/pins">{count} pins</Link> : (null)}

    </React.Fragment>)
}