import React from 'react';
import Data from "../Data/index";
import { Page404 } from "../ErrorPages/index";
import PublicationHistogram from "../PublicationHistogram";
import TopWrapper from "../TopWrapper";
import ResultList from "../ResultList";
import BigNumber from "../BigNumber";

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
