import {
    getSavedAuthors, getSavedPublications, getSavedResources, subscribe, unsubscribe
} from "../SavedItemStorage"
import React from "react";
import ResultList from "../ResultList";
import TopWrapper from "../TopWrapper";
import BigNumber from "../BigNumber";

export default class SavedItemsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            publications: getSavedPublications(),
            authors: getSavedAuthors(),
            resources: getSavedResources()
        }

        this.updateCounts = this.updateCounts.bind(this);
    }

    componentDidMount() {
        subscribe("saved-items-page", this.updateCounts);
    }

    componentWillUnmount() {
        unsubscribe("saved-items-page");
    }

    updateCounts() {
        let publications = getSavedPublications();
        let authors = getSavedAuthors();
        let resources = getSavedResources();

        this.setState({
            publications,
            authors,
            resources
        });
    }



    render() {

        const resources = this.state.resources,
            authors = this.state.authors,
            publications = this.state.publications;

        console.log(resources);
        console.log(authors);
        console.log(publications);

        return (
            <div className="SavedItemPage">

                {TopWrapper(
                    <React.Fragment>
                        <div className="left">
                            <h1 className="title">Your pinned items</h1>
                            <p>
                                These items are stored temporarily in your browser.
                                They will not be saved after you close the browser window or tab.
                            </p>
                        </div>
                        <div className="right">
                            <div className="bignumber-tray">
                                <BigNumber
                                    label="testimonies"
                                    value={resources.length}
                                />
                                <BigNumber
                                    label="publications"
                                    value={publications.length}
                                />
                                <BigNumber
                                    label="authors"
                                    value={authors.length}
                                />
                            </div>
                        </div>
                    </React.Fragment>, {})

                }

                <section className="column-wrapper">
                    <ResultList items={resources}></ResultList>

                    <ResultList items={publications}></ResultList>
                    <ResultList items={authors}></ResultList>
                </section>



            </div>

        )
    }

}