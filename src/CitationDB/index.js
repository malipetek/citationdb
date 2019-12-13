import React from 'react';
import Data from "./Data";

import HomePage from "./HomePage";
import PublicationPage from "./PublicationPage";
import ResourcePage from "./ResourcePage";
import AuthorPage from "./AuthorPage";
import GenericPage from "./GenericPage";
import SavedItemsPage from "./SavedItemsPage";

import { HashRouter as Router, Route } from "react-router-dom";
import "./style/main.scss";

export default class extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.dataHasLoaded = this.dataHasLoaded.bind(this);

        // very crude, but works. pool all four data objects
        // until they are loaded
        let loadCounter = 0;
        let failCounter = 20;
        let interval = setInterval(() => {
            loadCounter += 1

            let loadedCount = 0;
            const tables = [Data.author, Data.publication, Data.footnote, Data.resource];

            tables.forEach(table => {
                if (table.hasLoaded() === true) { loadedCount++; }
            })

            if (loadedCount === tables.length) {
                this.dataHasLoaded();
                clearInterval(interval);
            } else {
                console.log("Data has not completely loaded yet " + loadCounter)
                failCounter--;
                if (failCounter <= 0){
                    console.log("Bailing X(")
                    clearInterval(interval)
                }
            }
        }, 10);
    }

    componentDidMount() {
        console.log("Component mounted.")
        // let deferredPrompt;
        window.addEventListener('beforeinstallprompt', (e) => {
            // Stash the event so it can be triggered later.
            // deferredPrompt = e;
            // Update UI notify the user they can add to home screen

            console.log("Can install")
            e.prompt()
            // window.showInstallPromotion();
            // console.log("Can install", e);
            console.log(e.prompt)
        });

    }

    dataHasLoaded() {
        this.setState({ loaded: true })
    }

    render() {

        if (!this.state.loaded) { return <div>Loading...</div> }

        return (
            <div className="CitationDB">
                <Router basename="/">
                    <Route path="/" component={GenericPage(HomePage)} exact />

                    <Route
                        path="/publications/:id"
                        render={(props) => GenericPage(PublicationPage)({ saveType: "publication", ...props })}
                    />

                    <Route
                        path="/resources/:id"
                        render={(props) => GenericPage(ResourcePage)({ saveType: "resource", ...props })}
                    />

                    <Route
                        path="/authors/:id"
                        render={(props) => GenericPage(AuthorPage)({ saveType: "author", ...props })}
                    />

                    <Route
                        path="/pins"
                        component={GenericPage(SavedItemsPage)}
                    />
                </Router>
            </div>
        );
    }
}


