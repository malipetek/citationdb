import React from 'react';
// import ResultList from "../ResultList";
import Data from "../Data";
// import FootnoteList from "../FootnoteList";
import ResultList from "../ResultList";

export default class PublicationPage extends React.Component {


    render() {

        const id = this.props.match.params.id,
            item = Data.publication.byId(id),
            author = Data.author.byId(item["author.id"]),
            footnotes = Data.footnote.byPublication(id);

        return (
            <div className="PublicationPage">
                <section>
                    <h1>{item.title}</h1>
                    <div>
                        Author: {author.name}
                    </div>
                </section>


                <section>
                    {/* <FootnoteList footnotes={footnotes}></FootnoteList> */}
                    <ResultList items={footnotes}></ResultList>
                </section>
            </div>

        )
    }
}