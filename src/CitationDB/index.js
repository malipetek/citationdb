import React from 'react';
import HomePage from "./HomePage";
import PublicationPage from "./PublicationPage";
import ResourcePage from "./ResourcePage";
import AuthorPage from "./AuthorPage";
import GenericPage from "./GenericPage";
import SavedItemsPage from "./SavedItemsPage";

import { HashRouter as Router, Route, Link } from "react-router-dom";

import "./style/main.scss";

export default class extends React.Component {
    render() {

        return (
            <div className="CitationDB">
                <Router basename="/">
                    <Route path="/" component={GenericPage(HomePage)}  exact />
                    {/* <Route path="/publications/:id" component={GenericPage(PublicationPage)} /> */}
                    <Route path="/publications/:id" render={(props) => GenericPage(PublicationPage)({saveType:"publication",...props})} />

                    <Route path="/resources/:id" render={(props) => GenericPage(ResourcePage)({saveType:"resource",...props})} />

                    <Route path="/authors/:id" render={(props) => GenericPage(AuthorPage)({saveType:"author",...props})} />
                    <Route path="/pins" component={GenericPage(SavedItemsPage)} />
                </Router>
            </div>
        );
    }
}


