import React from 'react';
// import ResultList from "../ResultList";
import Data from "../Data";
// import FootnoteList from "../FootnoteList";
import ResultList from "../ResultList";
import uniqueArray from "../Data/utils/uniqueArray";

export default class PublicationPage extends React.Component {

    render(){
        const id = this.props.match.params.id,
            item = Data.publication.byId(id),
            author = Data.author.byId(item["author.id"]),
            footnotes = Data.footnote.byPublication(id);

        const footnoteCount = footnotes.length,
            resourceCount = uniqueArray(Data.resource.inFootnotes(footnotes).map(x => x.id)).length;

        return (
            <div className="PublicationPage">

                <section className="module-box">

                    <h1 className="title">{item.title}</h1>
                    <div>
                        {author.name ? `by ${author.name}` : (null)}
                    </div>
                    <div>
                        {item.date ? `${item.date}` : (null)} {item.publisher ? `, ${item.publisher}` : (null)}
                    </div>


                </section>
                }
                <section className="prose">
                    This publication contains <span className="stat">{footnoteCount} citations</span>
                    {resourceCount !== footnoteCount ? <span>{" "}to <span className="stat">{resourceCount} testimonies</span> </span> : (null)}.
                </section>


                <section>
                    {/* <FootnoteList footnotes={footnotes}></FootnoteList> */}
                    <ResultList items={footnotes}></ResultList>
                </section>
            </div>

        )
    }

}