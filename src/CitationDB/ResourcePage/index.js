import React from 'react';
import Data from "../Data/index";
import { Page404 } from "../ErrorPages/index";
import PublicationHistogram from "../PublicationHistogram";
import TopWrapper from "../TopWrapper";
import ResultList from "../ResultList";
import BigNumber from "../BigNumber";
import Button from "../Button";
import pluralize from "pluralize";

import config from "../config";

export default class ResourcePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const id = this.props.match.params.id;
        const r = Data.resource.dictionary()[id];

        if (!r) {
            return Page404(this.props.location.pathname);
        }

        const publications = Data.publication.byResource(id);
        const footnotes = Data.footnote.byResource(id);

        console.log("Footnotes", footnotes);

        return (
            <div className="ResourcePage">
                {TopWrapper(
                    <React.Fragment>
                        <div className="left">
                            <h1 className="title">{r.title}</h1>
                            <div className="chunk metadata">
                                {r.id}
                            </div>

                            <div className="view-button-container">
                                <a href={Data.utils.getResourceLink(r)}> <Button text="View"></Button></a>
                            </div>


                            <div className="summary">
                                <p>
                                    This {config.words.resource.singular} has been cited <span className="stat">{footnotes.length} {pluralize("time", footnotes.length)}</span>
                                    {" "}in the <span className="stat">{publications.length} {pluralize("publication", publications.length)}</span> listed below.
                                </p>
                            </div>


                        </div>
                        <div className="right">
                            <PublicationHistogram items={publications}></PublicationHistogram>
                            <div className="bignumber-tray">
                                <BigNumber label="citations" value={footnotes.length}></BigNumber>
                                <BigNumber label="publications" value={publications.length}></BigNumber>
                            </div>
                        </div>
                    </React.Fragment>, { id, saveType: "resource" }
                )}

                <section className="column-wrapper">
                    <ResultList items={publications} />
                </section>

            </div>
        );
    }

}
