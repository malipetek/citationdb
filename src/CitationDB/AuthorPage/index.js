import React from 'react';
// import ResultList from "../ResultList";
import Data from "../Data";
// import PublicationList from "../PublicationList";
import ResultList from "../ResultList";
import SaveButton from "../SaveButton";

export default class AuthorPage extends React.Component {


    render() {

        const id = this.props.match.params.id,
            item = Data.publication.byId(id),
            author = Data.author.byId(item.id);
        //     footnotes = Data.footnote.byPublication(id);

        const publications = Data.publication.byAuthor(id)
        console.log(item)
        return (
            <div className="PublicationPage">
                <section className="module-box">
                    <h1 className="title">{author.name}</h1>
                    <div>
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