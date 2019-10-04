import React from 'react';
import HomePage from "./HomePage";
import PublicationPage from "./PublicationPage";
import ResourcePage from "./ResourcePage";
import AuthorPage from "./AuthorPage";

import { HashRouter as Router, Route, Link } from "react-router-dom";

import "./style/main.scss";

export default class extends React.Component {
    render() {
        return (
            <div className="CitationDB">
                <Router basename="/">
                    {/* <header>
                        <h1>
                            <Link to="/">Citation Database</Link>
                        </h1>
                    </header> */}
                    <Route exact path="/" render={() => <HomePage />} />
                    <Route path="/publications/:id" component={PublicationPage} />
                    <Route path="/resources/:id" component={ResourcePage} />
                    <Route path="/authors/:id" component={AuthorPage} />

                </Router>
            </div>
        );
    }
}


