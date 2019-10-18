import React from 'react';
import Data from "../Data";
import ResultList from "../ResultList";
import TopWrapper from "../TopWrapper";
import BigNumber from "../BigNumber";

/**
 * Author page, rendered at /authors/:id
 */
export default class AuthorPage extends React.Component {

    render() {

        const id = this.props.match.params.id,
            item = Data.publication.byId(id),
            author = Data.author.byId(item.id),
            publications = Data.publication.byAuthor(id),
            footnotes = Data.footnote.byAuthor(id)

        return (
            <div className="PublicationPage">

                {TopWrapper(
                    <React.Fragment>
                        <div className="left">
                            <h1 className="title">{author.name}</h1>
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