import React from 'react';
import Data from "../Data";
import ResultList from "../ResultList";
import uniqueArray from "../Data/utils/uniqueArray";
import { Link } from "react-router-dom";
import TopWrapper from "../TopWrapper";
import BigNumber from "../BigNumber";
import pluralize from "pluralize";

import config from "../config";

export default class PublicationPage extends React.Component {

    render() {
        const id = this.props.match.params.id,
            item = Data.publication.byId(id),

            // refactored to support multiple authors
            // authors = [Data.author.byId(item["author.id"])],
            authors = item["author.id"].map(authorID => Data.author.byId(authorID)),

            footnotes = Data.footnote.byPublication(id);

        const footnoteCount = footnotes.length,
            resourceCount = uniqueArray(Data.resource.inFootnotes(footnotes).map(x => x.id)).length;

        return (
            <div className="PublicationPage">
                {TopWrapper(
                    <React.Fragment>
                        <div className="left">
                            <h1 className="title">{item.title}</h1>
                            <div className="chunk">
                                {authors.map((author, k) =>
                                    <span key={k} className="metadata">
                                        <Link to={`/authors/${author.id}`}>{author.name ? `${author.name}` : (null)}</Link>
                                        {"; "}
                                    </span>
                                )}

                                <span className="metadata">
                                    {item.publisher ? `${item.publisher}` : (null)}
                                </span>

                                <span className="metadata light">
                                    {item.date ? `, ${item.date}` : (null)}
                                </span>
                            </div>
                            <div className="metadata light">
                                {item.uri ? <a rel="noopener noreferrer" target="_blank" href={item.uri}>Publication page</a> : (null)}

                            </div>

                            <div className="summary">
                                <p>
                                    This publication cites <span className="stat">{resourceCount} {pluralize(config.words.resource.singular, resourceCount)}</span>
                                    {" "}in the <span className="stat">{footnoteCount} {pluralize("citation", footnoteCount)}</span> listed below.
                                </p>
                            </div>

                        </div>
                        <div className="right">
                            <div className="bignumber-tray">
                                <BigNumber label="citations" value={footnoteCount}></BigNumber>
                                <BigNumber label={config.words.resource.plural} value={resourceCount}></BigNumber>
                            </div>
                        </div>
                    </React.Fragment>, { id, saveType: "publication" })
                }
                <section className="column-wrapper">
                    <ResultList items={footnotes}></ResultList>
                </section>
            </div >

        )
    }

}