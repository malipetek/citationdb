import React from 'react';
import Data from "../Data";
import ResultList from "../ResultList";
import TopWrapper from "../TopWrapper";
import BigNumber from "../BigNumber";
import uniqueArray from "../Data/utils/uniqueArray";
import pluralize from "pluralize";

import config from "../config";

/**
 * Author page, rendered at /authors/:id
 */
export default class AuthorPage extends React.Component {

    render() {

        const id = this.props.match.params.id,
            item = Data.publication.byId(id),
            author = Data.author.byId(item.id),
            publications = Data.publication.byAuthor(id),
            footnotes = Data.footnote.byAuthor(id),
            resourceCount = uniqueArray(Data.resource.inFootnotes(footnotes).map(x => x.id)).length;

        return (
            <div className="PublicationPage">

                {TopWrapper(
                    <React.Fragment>
                        <div className="left">
                            <h1 className="title">{author.name}</h1>
                            <div>{author.uri.length > 0 ? <a href={author.uri}>Author website</a>: (null)}</div>
                            <div className="summary">
                                <p>
                                    This author has made <span className="stat">{footnotes.length} {pluralize("citation", footnotes.length)}</span> 
                                    {" "}to <span className="stat">{resourceCount} {pluralize(config.words.resource.singular, resourceCount)}</span> 
                                    {" "}in the <span className="stat">{publications.length} {pluralize("publication", publications.length)}</span> listed below.
                                </p>
                            </div>

                        </div>
                        <div className="right">
                            <div className="bignumber-tray">
                                <BigNumber
                                    label="publications"
                                    labelSingular="publication"
                                    value={publications.length} />
                                <BigNumber
                                    label="citations"
                                    labelSingular="citation"
                                    value={footnotes.length} />
                                <BigNumber
                                    label={config.words.resource.plural}
                                    labelSingular={config.words.resource.singular}
                                    value={resourceCount} />


                            </div>
                        </div>
                    </React.Fragment>,
                    { id, saveType: "author" }
                )}

                <section className="column-wrapper">
                    <ResultList
                        items={publications}
                    />
                </section>

            </div>
        )
    }
}