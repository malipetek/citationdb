import { getSavedAuthors, getSavedPublications, getSavedResources, subscribe } from "../SavedItemStorage"
import React from "react";
import ResultList from "../ResultList";

export default class SavedItemsPage extends React.Component {

    render() {
        let publications = getSavedPublications();
        let authors = getSavedAuthors();
        let resources = getSavedResources();

        return (
            <div className="SavedItemPage">
                <section className="prose">
                    You have pinned {" "}
                    <span className="stat">
                        {authors.length} authors
                    </span>,{" "} 
                    <span className="stat">
                    {publications.length} publications
                    </span>
                    {" "} and {" "} 
                    <span className="stat">
                        {resources.length} testimonies
                    </span>
                    .
                </section>

                <section>
                <ResultList items={resources}></ResultList>

                    <ResultList items={publications}></ResultList>
                    <ResultList items={authors}></ResultList>
                </section>



            </div>

        )
    }

}