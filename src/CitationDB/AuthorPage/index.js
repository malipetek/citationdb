import React from 'react';
// import ResultList from "../ResultList";
import Data from "../Data";
// import PublicationList from "../PublicationList";
import ResultList from "../ResultList";

export default class AuthorPage extends React.Component {


    render() {

        const id = this.props.match.params.id,
            item = Data.publication.byId(id);
        //     author = Data.author.byId(item["author.id"]),
        //     footnotes = Data.footnote.byPublication(id);

        const publications = Data.publication.byAuthor(id)

        return (
            <div className="PublicationPage">
                <section>
                    <h1>{item.header}</h1>
                    <div>
                        {/* Author: {author.name} */}
                    </div>
                </section>


                <section>
                    <ResultList items={publications}></ResultList>
                    {/* <PublicationList publications={publications}></PublicationList> */}
                </section>
            </div>

        )
    }
}